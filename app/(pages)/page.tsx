import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'

export const metadata: Metadata = {
  title: 'Mango Markets',
}

export default function Page() {
  return <HomePage />
}
