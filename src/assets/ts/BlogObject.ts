export class BlogFileList {
    blogDetails: BlogInformation[] = [];

    constructor() {
        const files = import.meta.glob('@/assets/blog/*', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
        const sortedPaths = Object.keys(files).sort();
        for (const path of sortedPaths) {
            this.blogDetails.push(new BlogInformation(path, files[path]!))
        }
    }
}

export class BlogInformation {
    path: string
    id: string = "";
    title: string = "";
    date: Date = new Date()
    contentRaw: string = "";
    tags: Array<string> = new Array<string>()

    constructor(path: string, content: string) {
        this.path = path
        this.contentRaw = content

        // Generate a simple hash based on the path
        this.id = this.hashString(path);
        
        // Extract filename from path
        const filename = path.split('/').pop() || "";
        
        if (filename.endsWith(".md")) {
            const nameWithoutExtension = filename.substring(0, filename.length - 3)
            const rawInput = nameWithoutExtension.split('_');

            // Example: "02-28-2026_This is the title_tech,life,rant.md"
            const [datePart = "", titlePart = "", tagPart = ""] = rawInput;

            if (rawInput.length >= 3) {
                const rawTags = tagPart.split(",")

                this.title = titlePart;
                this.date = new Date(datePart)
                this.tags = rawTags;
            }
        }
    }

    private hashString(str: string): string {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }
}