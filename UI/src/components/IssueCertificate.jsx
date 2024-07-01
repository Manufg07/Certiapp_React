import React from 'react'

const IssueCertificate = () => {
  return (
    <>
    <div>
    <h1 className=" text-2xl font-bold">Certificate Dapp</h1>

    <br />
    <div >
      <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
    <div className="flex flex-col justify-center items-center ">
      <form action="/submit-form" method="POST">
        <div className="border-2 rounded px-20" >
          <div className="p-2">
          <label className="block " for="courseName">Select Course *</label>
          <select className="border-2 border-black" name="course" id="course">
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="p-2">
          <label className="block" for="certificateID">Certificate ID *</label>
          <input type="text" className="border-2 border-black" name="certiid" id="certiid" placeholder="Certificate ID" required />
        </div>
        <div className="p-2">
          <label className="block" for="candidateName">Candidate name *</label>
          <input type="text" className="border-2 border-black" name="name" id="name" placeholder="Name" required/>
        </div>
        <div className=" p-2">
          <label className="block" for="grade">Select Grade *</label>
          <select className="border-2 border-black" name="grade" id="grade">
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="p-2">
          <label className="block" for="date">Issue Date *</label>
          <input  className="border-2 border-black" id="date" name="date" required/>
        </div>
        <button className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10" type="submit" >Issue Certificate</button></div>
      </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default IssueCertificate