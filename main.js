import './style.css'
import * as mdb from 'mdb-ui-kit'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyA6mEORg-vA4q0CeczC8b2tt-_nDMAh3hM',
  authDomain: 'work-app-19914.firebaseapp.com',
  projectId: 'work-app-19914',
})

const db = getFirestore()

function submit_form(event) {
  //Prevent Default Form Submission Behavior
  event.preventDefault()

  //Get Form Values
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const gender = document.getElementById('gender').value
  const workInterested = document.getElementById('workInterested').value
  const aadhar = document.getElementById('Aadhar').value
  const mobileNo = document.getElementById('mobile').value
  const address = document.getElementById('Address').value
  const city = document.getElementById('City').value
  const pinCode = document.getElementById('pinCode').value
  const email = document.getElementById('Email').value
  console.log(name)
  //Save Form Data To Firebase
  async function uploadData() {
    try {
      const document = await addDoc(collection(db, 'formData'), {
        name,
        age,
        gender,
        workInterested,
        aadhar,
        mobileNo,
        address,
        city,
        pinCode,
        email,
      })
      alert('Your Form Has Been Submitted Successfully')
      document.getElementById('name').value = ''
      document.getElementById('age').value = ''
      document.getElementById('gender').value = ''
      document.getElementById('workInterested').value = ''
      document.getElementById('Aadhar').value = ''
      document.getElementById('mobile').value = ''
      document.getElementById('Address').value = ''
      document.getElementById('City').value = ''
      document.getElementById('pinCode').value = ''
      document.getElementById('Email').value = ''
    } catch (e) {
      console.error('Error submitting from, try again.')
    }
  }
  uploadData()
}

window.submit_form = submit_form
