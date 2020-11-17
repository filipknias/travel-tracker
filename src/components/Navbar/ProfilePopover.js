import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
// Icons
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ManageProfileIcon from "@material-ui/icons/AccountBox";
import ResetPasswordIcon from "@material-ui/icons/Lock";
import GalleryIcon from "@material-ui/icons/Collections";
// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

const useStyles = makeStyles({
  profileAvatar: {
    height: 25,
    width: 25,
  },
  popoverAvatar: {
    height: 40,
    width: 40,
  },
  profileInfo: {
    display: "flex",
    padding: "15px 25px",
  },
  profileNameData: {
    marginLeft: 20,
  },
});

const ProfilePopover = ({ user, logoutUser }) => {
  const classes = useStyles();
  // State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar
          alt="profile-image"
          src={user.data.photoURL}
          className={classes.profileAvatar}
        />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className={classes.profileInfo}>
          <Avatar
            src={user.data.photoURL}
            alt="profile-image"
            className={classes.popoverAvatar}
          />
          <div className={classes.profileNameData}>
            <Typography variant="h6">{user.data.displayName}</Typography>
            <Typography variant="body2">{user.data.email}</Typography>
          </div>
        </div>
        <Divider />
        <List>
          <Hidden mdUp>
            <ListItem button>
              <ListItemIcon>
                <GalleryIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItem>
          </Hidden>
          <ListItem button>
            <ListItemIcon>
              <ManageProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Profile" />
          </ListItem>
          <ListItem component={Link} to="/reset-password" button>
            <ListItemIcon>
              <ResetPasswordIcon />
            </ListItemIcon>
            <ListItemText primary="Reset Password" />
          </ListItem>
          <ListItem onClick={() => logoutUser()} button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

ProfilePopover.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(ProfilePopover);
