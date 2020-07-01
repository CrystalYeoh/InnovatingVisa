import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Sidebar({ items }) {
  console.log(items);
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((item) => (
          <ListItem key={item} button>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
