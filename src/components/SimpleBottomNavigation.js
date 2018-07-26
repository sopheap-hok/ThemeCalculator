import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NaturePeople from '@material-ui/icons/NaturePeople';
import Pool from '@material-ui/icons/Pool';
import AcUnit from '@material-ui/icons/AcUnit';
import LocalFlorist from '@material-ui/icons/LocalFlorist';
import {ThemeConsumer} from '../context/ThemeContext'

const styles = {
  root: {
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <ThemeConsumer>
        {({ changeTheme }) => (
          <BottomNavigation
            value={value}
            showLabels
            className={classes.root}
            onChange={(event, value) => { 
              this.setState({ value });
              changeTheme(value);
            }}
          >
            <BottomNavigationAction label="Spring" icon={<LocalFlorist />} />
            <BottomNavigationAction label="Summer" icon={<Pool />} />
            <BottomNavigationAction label="Fall" icon={<NaturePeople />} />
            <BottomNavigationAction label="Winter" icon={<AcUnit />} />
          </BottomNavigation>
        )}
        </ThemeConsumer>
      
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
