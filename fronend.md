import Router from 'next/router';
const handleClickIndex = () => Router.push({
  pathname: '/'
})

const handleClickAbout = () => Router.push({
  pathname: '/about'
})

  //<button onClick={handleClickAbout}>About Page</button>
  //การเลือกใช้  router สำหรับการนำทาง 
  _____________________________________________________________________________________________________________________________

  rcf = การสร้างเเบบ fuction
  rcc = การสร้าง หน้ารวม จะต้องมีการ import
  import Nav from '../components/nav'
  import React, { Component } from 'react'

  เเละเรียกใช้   const { Component } = this.props; ใน render()
  เรียก<Component /> ในการใช้งาน เเสดงหน้าเว็บ

--------------------------------------------------------------------------------------------------------------------------------

การนำทางด้วย link
import Link from 'next/link'
รูปเเบการใช้งาน
<Link href="service"><a className="nav-link  text-white ">Service</a></Link>
--------------------------------------------------------------------------------------------------------------------------------

การ import header เพื่อใช้งาน เช่นการ เรียก css bootstap การตั้ง title
import Head from 'next/head'

--------------------------------------------------------------------------------------------------------------------------------
 หน้าเว็บมชักจะทำงาน
 ใน page
 เเละ lyout จะ import จากข้างนอกเข้ามานั้นเอง