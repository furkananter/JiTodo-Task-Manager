// This is an Interface file for our Todo App.
// It contains the properties that our Todo Model will have.

// Todo uygulamamız için oluşturduğumuz Model Interface'i.
// içerisinde id, todo, isDone gibi bir todo için hayati değer taşıyan propslar var.
export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}