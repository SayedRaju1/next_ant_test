import { Button, Calendar, Col, DatePicker, Input, Menu, Row, Table, Typography } from "antd";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Button type="primary">Button</Button>
      <DatePicker />
    </div>
  )
}
