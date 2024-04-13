import { render, screen } from "@testing-library/react";
import List from "../components/List";

describe("Todo機能", () => {
  const testTodoList = [
    { id: 1, title: "買い物" },
    { id: 2, title: "掃除" },
    { id: 3, title: "洗濯" },
  ];

  describe("Todo一覧を取得できる", () => {
    it("todoの個数を正しく表示できる", () => {
      render(<List TodoList={testTodoList} />);
      const todoItems = screen.getAllByText(/買い物|掃除|洗濯/);
      expect(todoItems).toHaveLength(3);
    });
    it("Todoがない時に無いというテキストが出る", () => {
      render(<List TodoList={[]} />);
      const noTodoText = screen.getByText("Todoがありません");
      expect(noTodoText).toBeInTheDocument();
    });
    it("id, titleを正しく取得できる", () => {
      render(<List TodoList={testTodoList} />);
      const todoItems = screen.getAllByRole("listitem");

      todoItems.forEach((todo, index) => {
        expect(todo).toHaveTextContent(
          `${testTodoList[index].id}: ${testTodoList[index].title}`,
        );
      });
    });
  });
  it.todo("Todoを追加できる");
  it.todo("Todoを削除できる");
  it.todo("Todoを更新できる");
});
