import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'

export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return <HomePage />
}
