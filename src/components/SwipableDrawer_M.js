import React from 'react';
import Axios from 'axios';
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
import SearchIcon from '@material-ui/icons/SearchOutlined';


import { useSelector, useDispatch } from 'react-redux';
import CountrySelect from './CountrySelect';
import CategorySelect from './CategorySelect';
import { API } from '../config';
import { setArticles } from '../store/state';
import KeywordSelect from './KeywordSelect';

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
  //subscribe to state

  const currCountry = useSelector((state) => state.currCountry);
  const currCategory = useSelector((state) => state.currCategory);
  const currKeyword = useSelector((state) => state.currKeyword);
  const dispatch = useDispatch();


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

  const handleSearch = async () => {
    console.log('search button clicked')

    // console.log(currCountry)
    if (!currCountry || currCountry === 'none') return;

    // console.log(currCategory)
    // console.log(currKeyword)

    // add state variables


    try {
      const response = await Axios({
        url: `${API}external`,
        method: 'post',
        data: {
          currCountry,
          currCategory,
          currKeyword
        }
      })
      if (!response.ok) throw Error('Search fetch failed (Swipable Drawer)');
      console.log('response.data:', response.data)

      const { resArticles } = response.data;

      dispatch(setArticles(resArticles));
      // localStorage.setItem(`worldViewArticles-${qs}`, JSON.stringify(articles));

    } catch (e) { console.log(e); }
    // }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
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
          <CountrySelect className={classes.listItemCustom} />
        </ListItem>
        <ListItem>
          <CategorySelect className={classes.listItem} />
        </ListItem>
        {/* <ListItem>
          <KeywordSelect className={classes.listItem} />
        </ListItem> */}
        <ListItem >
          <SearchButton onClick={handleSearch} />
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
          <SearchIcon
            onClick={toggleDrawer(anchor, true)}
            style={{ fontSize: 30, marginLeft: '10px', marginTop: '6px', cursor: 'pointer' }}>{anchor}
          </SearchIcon>
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
