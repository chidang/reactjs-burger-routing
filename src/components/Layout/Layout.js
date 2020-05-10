import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render(){
        return (
            <>
                <Toolbar drawerToggleClick={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
} 
    

export default Layout;
