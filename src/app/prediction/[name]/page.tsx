const predictAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}

const predictGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json()
}

const predictNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}

interface Params {
  params: {name: string};
}

export default async function Page({params}: Params) {
    const ageData = predictAge(params.name)
    const genderData = predictGender(params.name)
    const countryData = predictNationality(params.name)
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

    return (
      <div className="personal-info">
        <h2>Personal Info about {params.name.toUpperCase()}</h2>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.country[0]?.country_id}</div>
      </div>
    );
  }