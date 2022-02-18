export const storage = window.localStorage;
const PROJECT_KEY: string = 'wa-test';

export async function getData(): Promise<any> {
  const data: string = await storage.getItem(PROJECT_KEY) || '';

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export async function getItemFromStorage(value: string): Promise<any> {
  const data: any = await getData();
  return data ? data[value] : null;
}

export async function setItemOnStorage(object: any): Promise<void> {
  const data: any = await getData();
  
  let newData: any = {};

  if (data) {
    newData = {
      ...data,
    };
  }

  const entries = Object.entries(object);

  for (const [key, value] of entries) {
    newData = {
      ...newData,
      [key]: value,
    }
  }

  await storage.setItem(PROJECT_KEY, JSON.stringify(newData));
}

export async function saveResultOnStorage({ questions, answers }: any): Promise<void> {
  const data: any = await getData();
  
  let newData: any = {};

  if (data) {
    newData = {
      ...data,
    };
  }

  if (questions && answers)  {
    if (data.results) {
      newData = {
        ...newData,
        results: [
          ...data.results,
          {
            questions,
            answers,
          }
        ]
      }
    } else {
      newData = {
        ...newData,
        results: [
          {
            questions,
            answers,
          }
        ]
      }
    }
  }

  await storage.setItem(PROJECT_KEY, JSON.stringify(newData));
}