import { ITodoItem } from './interfaces';
import { LocalKeyValue } from './utils/LocalKeyValue';

const TODO_LOCAL_STORAGE_KEY = 'todos';

const todoLocalKeyValue = new LocalKeyValue<ITodoItem[]>(TODO_LOCAL_STORAGE_KEY);

export class TodoService {
  getList(): ITodoItem[] {
    return todoLocalKeyValue.get() || [];
  }

  async get(id: ITodoItem['id']): Promise<ITodoItem | null> {
    const list = this.getList();
    return list.find((item) => item.id === id) || null;
  }

  async add(value: Partial<ITodoItem>): Promise<void> {
    const list = this.getList();
    const newItem: ITodoItem = {
      id: new Date().toISOString(),
      text: value.text,
      completed: false,
    }
    list.push(newItem);
    todoLocalKeyValue.set(list);
  }

  async update(value: ITodoItem): Promise<void> {
    const list = this.getList();
    const newList = list.map((item) => {
      if (item.id === value.id) {
        return value;
      }
      return item;
    })
    todoLocalKeyValue.set(newList);
  }

  async remove(id: ITodoItem['id']): Promise<void> {
    const list = this.getList();
    const newList = list.filter((item) => item.id !== id);
    todoLocalKeyValue.set(newList);
  }
}