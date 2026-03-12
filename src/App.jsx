import { useState } from 'react'
import BookingForm from './components/BookingForm'
import BookingFormRHF from './components/BookingFormRHF'

const tabs = [
  { label: 'Manual Form',      component: <BookingForm /> },
  { label: 'React Hook Form',  component: <BookingFormRHF /> },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '40px auto', padding: '0 20px' }}>
      <h1>🎵 Concert Ticket Booking</h1>

      {/* Tab buttons */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #ccc',
              background: activeTab === i ? '#333' : '#fff',
              color: activeTab === i ? '#fff' : '#333',
              fontWeight: activeTab === i ? 'bold' : 'normal',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active component */}
      {tabs[activeTab].component}
    </div>
  )
}