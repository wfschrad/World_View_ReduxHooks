import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NestedList from './NestedList_M';
import MenuIcon from '@material-ui/icons/Menu';
import SearchButton from './SearchButton_M';

import { useSelector, useDispatch } from 'react-redux';
import CountrySelect from './CountrySelect';
import CategorySelect from './CategorySelect';




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItemCustom: {
      marginBottom: '40px'
  },
  listHeading: {
      color: 'black',
      fontWeight: '600',
      marginBotton: '20px'
  }
});

export default function SwipeableTemporaryDrawer() {
    const isOpen = useSelector((state) => state.drawererIsOpen);
    console.log('isOpen', isOpen)

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
            <ListItem>
                <h1 className={classes.listHeading}>Custom Search</h1>
            </ListItem>
            <ListItem>
                <CountrySelect className={classes.listItemCustom}/>
            </ListItem>
            <ListItem>
                <CategorySelect className={classes.listItem}/>
            </ListItem>
            <ListItem>
                <CategorySelect className={classes.listItem}/>
            </ListItem>
            <ListItem>
                <SearchButton/>
            </ListItem>
        {/* {['Country', 'Category', 'Topic'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon onClick={()=>console.log('clicked')}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem> */}
        {/* ))} */}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            style={{ fontSize: 30 }}>{anchor}
          </MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}