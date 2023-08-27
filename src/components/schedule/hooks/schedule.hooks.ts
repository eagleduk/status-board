import { Client } from "@notionhq/client";
import { useState, useEffect } from "react";

function useScheduleData() {
  const mode = process.env.NODE_ENV;
  const [data, setData] = useState<{
    results: any[];
    object: string;
    next_cursor?: null;
    has_more?: boolean;
    type?: "string";
    page_or_database?: any;
    developer_survey?: "string";
  } | null>(null);

  useEffect(() => {
    if (mode === "development") {
      setData({
        object: "list",
        results: [
          {
            object: "page",
            id: "80a2171f-179d-48b0-9e34-2b534c26214a",
            created_time: "2023-08-25T02:30:00.000Z",
            last_edited_time: "2023-08-27T11:52:00.000Z",
            created_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            last_edited_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            cover: null,
            icon: null,
            parent: {
              type: "database_id",
              database_id: "7399d5fa-ac7b-4ff3-b4dc-64a0eb40bf81",
            },
            archived: false,
            properties: {
              team: {
                id: "KWk%7D",
                type: "rich_text",
                rich_text: [],
              },
              date: {
                id: "Ke%3Ee",
                type: "date",
                date: {
                  start: "2023-09-02",
                  end: null,
                  time_zone: null,
                },
              },
              hour: {
                id: "Uvom",
                type: "number",
                number: 2,
              },
              place: {
                id: "Xw%5CN",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "마루공원",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "마루공원",
                    href: null,
                  },
                ],
              },
              home: {
                id: "afSv",
                type: "checkbox",
                checkbox: true,
              },
              time: {
                id: "fk_%60",
                type: "number",
                number: 10,
              },
              location: {
                id: "gIf%60",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "퇴근.성명.환희",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "퇴근.성명.환희",
                    href: null,
                  },
                ],
              },
              title: {
                id: "title",
                type: "title",
                title: [
                  {
                    type: "text",
                    text: {
                      content: "zutfu",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "zutfu",
                    href: null,
                  },
                ],
              },
            },
            url: "https://www.notion.so/zutfu-80a2171f179d48b09e342b534c26214a",
            public_url: null,
          },
          {
            object: "page",
            id: "6fc9e63c-07ac-4801-9d62-8874d21f45ef",
            created_time: "2023-08-25T01:45:00.000Z",
            last_edited_time: "2023-08-27T11:52:00.000Z",
            created_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            last_edited_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            cover: null,
            icon: null,
            parent: {
              type: "database_id",
              database_id: "7399d5fa-ac7b-4ff3-b4dc-64a0eb40bf81",
            },
            archived: false,
            properties: {
              team: {
                id: "KWk%7D",
                type: "rich_text",
                rich_text: [],
              },
              date: {
                id: "Ke%3Ee",
                type: "date",
                date: {
                  start: "2023-09-09",
                  end: null,
                  time_zone: null,
                },
              },
              hour: {
                id: "Uvom",
                type: "number",
                number: 4,
              },
              place: {
                id: "Xw%5CN",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "마루공원",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "마루공원",
                    href: null,
                  },
                ],
              },
              home: {
                id: "afSv",
                type: "checkbox",
                checkbox: true,
              },
              time: {
                id: "fk_%60",
                type: "number",
                number: 8,
              },
              location: {
                id: "gIf%60",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "퇴근.성명.환희",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "퇴근.성명.환희",
                    href: null,
                  },
                ],
              },
              title: {
                id: "title",
                type: "title",
                title: [
                  {
                    type: "text",
                    text: {
                      content: "test",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "test",
                    href: null,
                  },
                ],
              },
            },
            url: "https://www.notion.so/test-6fc9e63c07ac48019d628874d21f45ef",
            public_url: null,
          },
          {
            object: "page",
            id: "3b68011d-7d52-4798-9e16-784697030896",
            created_time: "2023-08-25T01:45:00.000Z",
            last_edited_time: "2023-08-27T11:52:00.000Z",
            created_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            last_edited_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            cover: null,
            icon: null,
            parent: {
              type: "database_id",
              database_id: "7399d5fa-ac7b-4ff3-b4dc-64a0eb40bf81",
            },
            archived: false,
            properties: {
              team: {
                id: "KWk%7D",
                type: "rich_text",
                rich_text: [],
              },
              date: {
                id: "Ke%3Ee",
                type: "date",
                date: {
                  start: "2023-09-16",
                  end: null,
                  time_zone: null,
                },
              },
              hour: {
                id: "Uvom",
                type: "number",
                number: 2,
              },
              place: {
                id: "Xw%5CN",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "마루공원",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "마루공원",
                    href: null,
                  },
                ],
              },
              home: {
                id: "afSv",
                type: "checkbox",
                checkbox: true,
              },
              time: {
                id: "fk_%60",
                type: "number",
                number: 10,
              },
              location: {
                id: "gIf%60",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "퇴근.성명.환희",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "퇴근.성명.환희",
                    href: null,
                  },
                ],
              },
              title: {
                id: "title",
                type: "title",
                title: [
                  {
                    type: "text",
                    text: {
                      content: "test3",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "test3",
                    href: null,
                  },
                ],
              },
            },
            url: "https://www.notion.so/test3-3b68011d7d5247989e16784697030896",
            public_url: null,
          },
          {
            object: "page",
            id: "919790f0-0caa-4cc2-a56b-d1ac139245db",
            created_time: "2023-08-27T11:50:00.000Z",
            last_edited_time: "2023-08-27T14:24:00.000Z",
            created_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            last_edited_by: {
              object: "user",
              id: "20aec717-e2c6-4539-9115-b137fedbe02e",
            },
            cover: null,
            icon: null,
            parent: {
              type: "database_id",
              database_id: "7399d5fa-ac7b-4ff3-b4dc-64a0eb40bf81",
            },
            archived: false,
            properties: {
              team: {
                id: "KWk%7D",
                type: "rich_text",
                rich_text: [],
              },
              date: {
                id: "Ke%3Ee",
                type: "date",
                date: {
                  start: "2023-09-23",
                  end: null,
                  time_zone: null,
                },
              },
              hour: {
                id: "Uvom",
                type: "number",
                number: 2,
              },
              place: {
                id: "Xw%5CN",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "마루공원",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "마루공원",
                    href: null,
                  },
                ],
              },
              home: {
                id: "afSv",
                type: "checkbox",
                checkbox: true,
              },
              time: {
                id: "fk_%60",
                type: "number",
                number: 10,
              },
              location: {
                id: "gIf%60",
                type: "rich_text",
                rich_text: [
                  {
                    type: "text",
                    text: {
                      content: "퇴근.성명.환희",
                      link: null,
                    },
                    annotations: {
                      bold: false,
                      italic: false,
                      strikethrough: false,
                      underline: false,
                      code: false,
                      color: "default",
                    },
                    plain_text: "퇴근.성명.환희",
                    href: null,
                  },
                ],
              },
              title: {
                id: "title",
                type: "title",
                title: [],
              },
            },
            url: "https://www.notion.so/919790f00caa4cc2a56bd1ac139245db",
            public_url: null,
          },
        ],
        next_cursor: null,
        has_more: false,
        page_or_database: {},
      });
    } else {
      (async () => {
        const client = new Client({
          auth: process.env.REACT_APP_NOTION_KEY,
          // notionVersion: "2022-06-28",
          // agent: "https://cors-anywhere.herokuapp.com/",
        });
        const response = await client.databases.query({
          database_id: "7399d5faac7b4ff3b4dc64a0eb40bf81",
        });
      })();
    }
  }, [mode]);

  return data;
}

export { useScheduleData };
