import type { Component } from 'vue'
import { BLOG_LOCKS } from '@/assets/ts/BlogLocks.ts'

export class BlogFileList {
    blogDetails: BlogInformation[] = [];

    constructor() {
        const files = import.meta.glob('@/assets/blog/*', { eager: true, import: 'default' }) as Record<string, Component>;
        const entries = Object.entries(files).sort((a, b) => a[0].localeCompare(b[0]));
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry) {
                const [path, component] = entry;
                const blog = new BlogInformation(path, component);
                this.blogDetails.push(blog);
            }
        }
        // Sort by date from oldest to newest
        this.blogDetails.sort((a, b) => a.date.getTime() - b.date.getTime());
        for (let i = 0; i < this.blogDetails.length; i++) {
            const blog: BlogInformation = this.blogDetails[i];
            blog.id = (i + 1).toString();
        }
    }
}

export class BlogInformation {
    path: string
    id: string = "";
    title: string = "";
    date: Date = new Date()
    tags: Array<string> = new Array<string>()
    component: Component | null = null
    locked: boolean = false
    password: string = ""
    filename: string = ""

    constructor(path: string, component: Component) {
        this.path = path
        this.component = component

        // Extract filename from path
        const filename = path.split('/').pop() || "";
        this.filename = filename;

        if (BLOG_LOCKS[filename]) {
            this.locked = true;
            this.password = BLOG_LOCKS[filename];
        }
        
        if (filename.endsWith(".md")) {
            const nameWithoutExtension = filename.substring(0, filename.length - 3)
            const rawInput = nameWithoutExtension.split('_');

            // Example: "02-28-2026_Homelab thoughts, my woke takes, and robotic shenanigans_tech,life,rant.md"
            const [datePart = "", titlePart = "", tagPart = ""] = rawInput;

            if (rawInput.length >= 3) {
                const rawTags = tagPart.split(",")

                this.title = titlePart.replace(/\(U\+([0-9A-Fa-f]{4,6})\)/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)));
                this.date = new Date(datePart)
                this.tags = rawTags;
            }
        }
    }
}