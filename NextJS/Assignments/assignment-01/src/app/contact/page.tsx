import { error } from "console"

export default async function Contact() {
    const res = false;
    if (!res) {
      
      throw new Error('Failed to fetch data')
      return 'There was an error.'
    }
    return (
      <div className="md:container md:mx-auto p-10">
          <h1 className="text-3xl font-bold text-black">Contact</h1>
      </div>
    )
}