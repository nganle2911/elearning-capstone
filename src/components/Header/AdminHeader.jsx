import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonStyled } from '../ButtonStyled/ButtonStyled'

export default function AdminHeader() {
    return (
        <header className='headerAdmin bg-white w-full h-24 fixed z-20 drop-shadow'>
            <nav className='container py-2 flex items-center justify-between' aria-label="Global">
                <div>
                    <NavLink to={"/admin"}>
                        <img className='w-52' src='../../img/logo.png' alt='logo-edu' />
                    </NavLink>
                </div>

                {/* Account */}
                <div className='headAdmin__item'>
                    <NavLink>
                        <ButtonStyled>Log in</ButtonStyled>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
