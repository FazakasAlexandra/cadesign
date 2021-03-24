import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import EnvelopeCard from '../components/EnvelopeCard'
const envelopes = require('../db/envelopes.json');

export default function HomePage() {
  console.log(envelopes)
  return (
    <>
    <h1>home page</h1>
    </>
  )
}