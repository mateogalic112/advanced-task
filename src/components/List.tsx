import React from "react";

import classNames from "classnames";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import ListItem from "./ListItem";

import { Color } from "../models/ColorResponse";

type ListProps = {
  list: Set<Color>;
  setList: React.Dispatch<React.SetStateAction<Set<Color>>>;
  hexColor: string;
};

const List: React.FC<ListProps> = ({ list, setList, hexColor }) => {
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination?.index as number, 0, reorderedItem);

    setList(new Set([...items]));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="colors">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {Array.from(list).map((item: Color, index: number) => {
              const itemClasses = classNames({
                "list-item": true,
                active: hexColor === item.hex,
              });
              return (
                <ListItem
                  itemClasses={itemClasses}
                  item={item}
                  idx={index}
                  key={item.id}
                />
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
