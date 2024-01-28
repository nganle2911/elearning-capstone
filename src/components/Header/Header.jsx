import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { https } from '../../services/api'
import { NavLink } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc").then((res) => {
            setCategoryItems(res.data);
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    return (
        <header className="headerHome bg-white">
            <nav className="headerHome__menu container py-2 flex max-w-7xl items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="w-52" src="../../img/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" style={{ color: "#191919" }} />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 textColor">
                            Danh mục
                            <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {categoryItems.map((item) => (
                                        <div
                                            key={item.maDanhMuc}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                                        >
                                            <div className="flex-auto">
                                                <a href='#' className="block font-medium text-base textColor">
                                                    {item.tenDanhMuc}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-lg font-semibold leading-6 textColor">
                        Khoá học
                    </a>
                    <a href="#" className="text-lg font-semibold leading-6 textColor">
                        Blog
                    </a>
                </Popover.Group>
                <div className="headerHome__input hidden lg:flex lg:flex-1 lg:justify-end items-center">
                    <div className='input__item flex relative items-center'>
                        <input type='text' placeholder='Search...' className="h-10 rounded item__myInput" />
                        <MagnifyingGlassIcon className="absolute right-2 h-5 w-5 text-black" />
                    </div>
                    <NavLink to={"/login"} className="text-lg ml-5 font-semibold leading-6 text-gray-900">
                        <button className='myBtn__login'>Đăng nhập</button>
                    </NavLink>
                </div>
            </nav>

            <Dialog as="div" className="headerHome__mobileMenu lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="mobileMenu__content fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-44"
                                src="../../img/logo.png"
                                alt="logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className='content__input flex relative items-center mt-10'>
                        <input type='text' placeholder='Search...' className="inputStyle h-10 w-full rounded" />
                        <MagnifyingGlassIcon className="absolute right-2 h-5 w-5 text-black" />
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Danh mục
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...categoryItems].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.maDanhMuc}
                                                        as="a"
                                                        href="#"
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 hover:bg-gray-100"
                                                        style={{ color: "#191919" }}
                                                    >
                                                        {item.tenDanhMuc}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Khoá học
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blog
                                </a>
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to={"/login"}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <button className='myBtn__login'>Đăng nhập</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
