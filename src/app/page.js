"use client";

import Image from "next/image";
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { Menu } from '@headlessui/react'


export default function Home() {
  return (
    <div className="bg-[#2f392e] flex items-start justify-items-center flex-col min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full h-auto px-3 py-1 flex items-center justify-between border border-[#b99365] rounded-2xl">
        <Image src="/noa.png" width={64} height={64} alt="noa" />
        <h1 className="font-bold text-2xl peyda">منو</h1>
        {/* <Image src="/mennu.png" width={32} height={32} alt="noa" /> */}
        <Menu>
         <Menu.Button><Image src="/mennu.png" width={32} height={32} alt="noa" /></Menu.Button>
         <Menu.Items className="absolute peyda text-2xl flex flex-col justify-between items-center right-0 mt-0 w-full h-1/2 p-6  divide-gray-100 rounded-md bg-[#161a15dd] shadow-lg ring-1 ring-black/5 focus:outline-none transiot">
        <Menu.Item className="mt-12">
          {({ active }) => (
            <Link
              className={`${active && 'opacity-60'}`}
              href="/"
            >
              منو
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && 'opacity-60'}`}
              href="/"
            >
              ادرس
            </Link>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">تماس با ما</span>
        </Menu.Item>
         </Menu.Items>
        </Menu>

      </header>
      <main className="mt-20 w-full">
      <Tab.Group>
        <Tab.List>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">نوشیدنی گرم بر پایه قهوه</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">نوشیدنی سرد بر پایه قهوه</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">میلک شیک</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">نوشیدنی سرد</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">نوشیدنی گرم</Tab>          
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">ابمیوه های طبیعی</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">ماکتل ها</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">دمنوش و چای</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">دسر ها</Tab>
          <Tab className="mx-2.5 my-2 py-2.5 px-6 rounded-xl bg-[#2f392e] border border-[#b99365] peyda hover:opacity-50 transition-opacity">صبحانه و عصرانه</Tab>
        </Tab.List>
        <Tab.Panels className="mt-10 flex justify-center flex-row flex-wrap">
          {/* نوشدینی های سرد بر پایه قهوه */}
          <Tab.Panel className="text-center flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/esp.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">اسپرسو سینگل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۵۳</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">اسپرسو دبل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">مارک سینگل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">مارک دبل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۲</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">امریکانو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۷۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> لاته</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۴</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> موکا</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۲</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> کاپوچینو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۸</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> کارامل ماکیاتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۹</p>
            </div>
          </Tab.Panel>
          {/* نوشیدنی سرد بر پایه قهوه */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ایس امریکانو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ایس لاته</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۴</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ایس کارامل ماکیاتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ایس موکا</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۲</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">افوگاتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">مارتینی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ایریش</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۳۵</p>
            </div>
          </Tab.Panel>
          {/* میلک شیک */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> نوتلا</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> شکلات</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> بادام زمینی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> توت فرنگی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اروئو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> لوتوس</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
          </Tab.Panel>
          {/* نوشیدنی سرد */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> موهیتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">رد موهیتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۲</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> موهیتو کوبایی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> بلو موهیتو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اسموتی اناناس</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اسموتی انبه</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اسموتی استوایی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۶۳</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اسموتی میوه های جنگلی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۶۳</p>
            </div>
          </Tab.Panel>
          {/* نوشیدنی گرم */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> هات چاکلت</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۸</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ماسالا</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۸</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> چای کرک</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۸</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> کاپوچینو کلاسیک</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۸</p>
            </div>
          </Tab.Panel>
          {/* اب میوه های طبیعی */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> شیر موز</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۸</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اب هویج</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۲</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> اب هویج بستنی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۸۹</p>
            </div>
          </Tab.Panel>
          {/* ماکتل ها */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
              <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> بلو پاستیل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۳۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> بلو اسکای</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> پنیک رد</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۳۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> پریلمون</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> پیناکولادا</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۲۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">بلو اپل</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۴۹</p>
            </div>
          </Tab.Panel>
          {/* دمنوش و چای */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
              <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">چای سبز</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۵۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">چای سیاه</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۴۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">چای ترش</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سیب دارچین</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سیب بهشتی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">بهار نارنج</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">اویشن</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">گل گاوزبان</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">بابونه</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">به لیمو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۶۵</p>
            </div>
          </Tab.Panel>
          {/* دسر ها */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">کیک شکلاتی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۹۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">کوکی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۲۷</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">کوکی شکلاتی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۲۷</p>
            </div>
          </Tab.Panel>
          {/* صبحانه و عصرانه */}
          <Tab.Panel className="mt-10 flex justify-center flex-row flex-wrap">
             <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">اسنک مرغ</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">پاستا الفردو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۹۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold"> سیب و پنیر</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۵۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سیب ساده</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سیب ویژه</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۹۵</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">ساندویچ سرد</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۱۹</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">نیمرو</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۷۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">املت</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۰۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">قارچ و تخم مرغ</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۵۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سوسیس و تخم مرغ</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۵۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">صبحانه انگلیسی</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۲۵۰</p>
            </div>
            <div className="peyda flex justify-end items-center flex-col w-40 h-40 w- mx-2.5 my-12 border rounded-b-xl border-[#b99365]">
              <Image src="/placeholder.jpg" className="mt-0 rounded-xl w-36 h-36 transition-transform bala" width={144} height={144} alt="product" />
              <h2 className="peyda font-bold">سینی هات داگ</h2>
              <p className="flex justify-center items-center"> <span className="text-[8px] font-bold text-right flex mr-1">هزارتومان</span>۱۹۵</p>
            </div>
          </Tab.Panel>

          
        </Tab.Panels>
      </Tab.Group>


        
  
      </main>
      <footer className="w-full h-20 mt-12 peyda bg-[#2f392e] flex justify-center items-end flex-col border-t border-[#b99365]">
        <h4>ادرس : سیرجان ، بلوار سید جمال</h4>
        <h5>تلفن : 09130000000</h5>
        
      </footer>
    </div>
  );
}
