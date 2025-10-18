import NavLink from "./NavLink";

function NavLinks(props) {
    return <ul className='hidden 
                          md:flex 
                          md:gap-12
                          font-extralight
                          text-sm
                          bg-white/15
                          dark:bg-black/15
                          px-15
                          py-2
                          rounded-full
                          backdrop-blur-xs
                          shadow-[0px_0px_70px_70px_rgba(0,0,0,15%)]
                          dark:shadow-[0px_0px_60px_60px_rgba(255,255,255,2%)]'> 
        {/* TODO: turn on box-shadow only when navbar is displaying due to position: sticky */}
        <NavLink executeScroll={props.executeScroll[0]}>Home</NavLink>
        <NavLink executeScroll={props.executeScroll[1]}>About</NavLink>
        <NavLink executeScroll={props.executeScroll[2]}>Projects</NavLink>
    </ul>
}

export default NavLinks;