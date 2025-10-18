function NavLink(props) {
    return <li className='hover:text-secondary 
                            hover:cursor-pointer
                          hover:dark:text-secondary-dark'
               onClick={props.executeScroll}>
        {props.children}
    </li>
}

export default NavLink;