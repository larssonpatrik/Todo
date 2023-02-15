import React from "react";
import Spacer from "../components/Spacer";
import ListPresenter from "../presenters/ListPresenter";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { H2, Paragraph } from "../components/Typography";
import InputForm from "../components/InputForm";

type ListGridProps = {
  activePageState: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    },
    Function
  ];

  addingState: [addingState: boolean, setAddingState: Function];
  addList: Function;
  removeList: Function;
  changeState: Function;
};

export default function ListGrid({
  activePageState,
  addingState,
  addList,
  removeList,
  changeState,
}: ListGridProps) {
  const [addingStateVar, setAddingState] = addingState;
  const [activePage, changeActivePage] = activePageState;

  /* function changeTaskStatus(index: number) {
    let temp = [...taskList];
    temp[index] = { ...temp[index], completed: !temp[index].completed };

    setTaskList(temp);
  }
  */

  return (
    <ScDiv>
      {activePage.lists.map((listObj, i) => {
        function addTaskToList(task: string) {
          let temp = { ...activePage };
          temp.lists[i].taskList = [
            ...temp.lists[i].taskList,
            { task: task, completed: false },
          ];
          changeActivePage({ ...temp });
        }

        function removeTaskFromList(task: string) {
          let temp = { ...activePage };
          temp.lists[i].taskList = temp.lists[i].taskList.filter((taskObj) => {
            return taskObj.task !== task;
          });
          changeActivePage({ ...temp });
        }

        function changeState(index: number) {
          let temp = { ...activePage };
          temp.lists[i].taskList[index].completed =
            !temp.lists[i].taskList[index].completed;
          changeActivePage({ ...temp });
        }

        return (
          <ListPresenter
            taskList={listObj.taskList}
            title={listObj.label}
            addTask={addTaskToList}
            removeTask={removeTaskFromList}
            removeList={removeList}
            changeState={changeState}
          />
        );
      })}
      <ScAddListElement addingState={addingStateVar}>
        {addingStateVar ? (
          <div>
            <H2>List name</H2>
            <Spacer size={1} />
            <InputForm action={addList} />
            <Spacer size={1} />
            <Paragraph
              align="center"
              button={true}
              action={() => setAddingState(!addingStateVar)}
            >
              Cancel
            </Paragraph>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: 12, cursor: "pointer" }}
            onClick={() => setAddingState(!addingStateVar)}
          >
            <AiOutlinePlus size={42} color="#dcdcdc" />
            <Spacer size={0} />
            <Paragraph color="#cccccc">Add new list</Paragraph>
          </div>
        )}
      </ScAddListElement>
    </ScDiv>
  );
}

const ScDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  padding: 0 56px;
`;

const ScAddListElement = styled.div<{ addingState: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.addingState ? "justify-content: center; align-items: center;" : null}
  width: 18vw;
  padding: 21px;
  border-radius: 8px;
  border: 3px solid #f0f0f0;
`;
