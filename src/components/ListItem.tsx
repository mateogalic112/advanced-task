import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { Color } from "../models/ColorResponse";

import styled from "styled-components";

type StyledListItemProps = {
  color: string;
};

const StyledListItem = styled.li<StyledListItemProps>`
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;

type ListItemProps = {
  itemClasses: string;
  item: Color;
  idx: number;
};

const ListItem: React.FC<ListItemProps> = ({ itemClasses, item, idx }) => {
  return (
    <Draggable draggableId={item.id.toString()} index={idx}>
      {(provided) => (
        <StyledListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={itemClasses}
          ref={provided.innerRef}
          color={`#${item.hex}`}
        >
          {item.hex}
        </StyledListItem>
      )}
    </Draggable>
  );
};

export default ListItem;
