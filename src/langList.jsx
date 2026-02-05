import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

export default function LangList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AdbIcon style={{ color: "greenyellow" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="C++" secondary="3 Years" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <JavascriptIcon style={{ color: "black" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="JavaScript" secondary="3 Years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <JavascriptIcon style={{ color: "black" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="React" secondary="3 Years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StorageIcon style={{ color: "yellow" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="SQL" secondary="3 Years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon style={{ color: "yellow" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Python" secondary="1 Year" />
      </ListItem>


    </List>
  );
}
