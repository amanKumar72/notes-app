export type Note = {
  id: string
  image?: string
  title: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}
export const notes: Note[] = [
  {
    id: "n1",
    title: "Project Kickoff Ideas",
    content:
      "Discussed initial roadmap for the client dashboard. Need authentication, analytics overview, and export functionality in v1.",
    createdAt: new Date("2026-05-02T09:15:00"),
    updatedAt: new Date("2026-05-03T11:20:00"),
  },
  {
    id: "n2",
    title: "Groceries",
    content:
      "Buy milk, eggs, coffee beans, pasta, and fresh vegetables. Remember to check for olive oil.",
    createdAt: new Date("2026-05-04T18:40:00"),
  },
  {
    id: "n3",
    title: "Workout Routine",
    content:
      "Monday: Chest + Triceps\nWednesday: Back + Biceps\nFriday: Legs + Shoulders\nAim for at least 30 mins cardio daily.",
    createdAt: new Date("2026-05-01T07:30:00"),
    updatedAt: new Date("2026-05-05T08:10:00"),
  },
  {
    id: "n4",
    title: "Books to Read",
    content:
      "1. Atomic Habits\n2. Deep Work\n3. The Psychology of Money\n4. Clean Code",
    createdAt: new Date("2026-04-28T14:00:00"),
  },
  {
    id: "n5",
    title: "Meeting Notes - Design Review",
    content:
      "The team preferred the darker UI theme. Sidebar navigation should stay collapsible. Add better spacing in mobile layouts.",
    createdAt: new Date("2026-05-06T13:25:00"),
    updatedAt: new Date("2026-05-06T15:00:00"),
  },
  {
    id: "n6",
    title: "Weekend Trip Plan",
    content:
      "Leave early Saturday morning. Pack chargers, camera, snacks, and extra clothes. Book hotel before Thursday.",
    createdAt: new Date("2026-05-07T20:45:00"),
  },
  {
    id: "n7",
    title: "App Feature Ideas",
    content:
      "Add markdown support, voice notes, offline sync, and note pinning. Explore AI summaries later.",
    createdAt: new Date("2026-05-08T10:05:00"),
    updatedAt: new Date("2026-05-09T09:50:00"),
  },
  {
    id: "n8",
    title: "Daily Journal",
    content:
      "Had a productive day working on the API integration. Fixed caching issues and reduced response times significantly.",
    createdAt: new Date("2026-05-10T21:10:00"),
  },
  {
    id: "n9",
    title: "Weekend Trip Plan",
    content:
      "Leave early Saturday morning. Pack chargers, camera, snacks, and extra clothes. Book hotel before Thursday.",
    createdAt: new Date("2026-05-07T20:45:00"),
  },
  {
    id: "n10",
    title: "App Feature Ideas",
    content:
      "Add markdown support, voice notes, offline sync, and note pinning. Explore AI summaries later.",
    createdAt: new Date("2026-05-08T10:05:00"),
    updatedAt: new Date("2026-05-09T09:50:00"),
  },
  {
    id: "n11",
    title: "Daily Journal",
    content:
      "Had a productive day working on the API integration. Fixed caching issues and reduced response times significantly.",
    createdAt: new Date("2026-05-10T21:10:00"),
  },
  {
    id: "n12",
    title: "App Feature Ideas",
    content:
      "Add markdown support, voice notes, offline sync, and note pinning. Explore AI summaries later.",
    createdAt: new Date("2026-05-08T10:05:00"),
    updatedAt: new Date("2026-05-09T09:50:00"),
  },
  {
    id: "n13",
    title: "Daily Journal",
    content:
      "Had a productive day working on the API integration. Fixed caching issues and reduced response times significantly.",
    createdAt: new Date("2026-05-10T21:10:00"),
  },
]

export const getNoteById = (id: string) => {
  return notes.find(note => note.id === id);
}