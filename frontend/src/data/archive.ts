export interface ArchiveItem {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export const archiveItems: ArchiveItem[] = [
  {
    id: 1,
    title: "AI Workshop 2024",
    date: "2024-03-15",
    description: "A hands-on workshop on AI fundamentals and applications.",
    link: "https://photos.app/ai-workshop-2024"
  },
  {
    id: 2,
    title: "Machine Learning Bootcamp",
    date: "2023-11-10",
    description: "Intensive bootcamp covering ML algorithms and real-world projects."
  },
  {
    id: 3,
    title: "Inaugural Club Meetup",
    date: "2023-09-01",
    description: "First official meeting of the AI & ML Club at OCT Bhopal."
  }
]; 