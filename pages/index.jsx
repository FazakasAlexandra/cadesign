import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import EnvelopeCard from '../components/EnvelopeCard'
const envelopes = require('../db/envelopes.json');

export default function HomePage() {
  console.log(envelopes)
  return (
    <div className="page home">
      <h1>home page (coming soon...)</h1>
    </div>
  )
}