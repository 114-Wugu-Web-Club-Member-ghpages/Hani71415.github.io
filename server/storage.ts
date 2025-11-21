import { type DiaryEntry, type InsertDiaryEntry, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getDiaryEntries(): Promise<DiaryEntry[]>;
  getDiaryEntry(id: string): Promise<DiaryEntry | undefined>;
  createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry>;
  
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private diaryEntries: Map<string, DiaryEntry>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.diaryEntries = new Map();
    this.portfolioItems = new Map();
  }

  async getDiaryEntries(): Promise<DiaryEntry[]> {
    return Array.from(this.diaryEntries.values());
  }

  async getDiaryEntry(id: string): Promise<DiaryEntry | undefined> {
    return this.diaryEntries.get(id);
  }

  async createDiaryEntry(insertEntry: InsertDiaryEntry): Promise<DiaryEntry> {
    const id = randomUUID();
    const entry: DiaryEntry = { 
      ...insertEntry, 
      id,
      tags: insertEntry.tags ?? null
    };
    this.diaryEntries.set(id, entry);
    return entry;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = { 
      ...insertItem, 
      id,
      imageUrl: insertItem.imageUrl ?? null,
      technologies: insertItem.technologies ?? null,
      demoUrl: insertItem.demoUrl ?? null,
      codeUrl: insertItem.codeUrl ?? null
    };
    this.portfolioItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
