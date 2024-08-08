const getPredictedAge = async(name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`) // Corrected URL
  return res.json()
}

const getPredictedGender = async(name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`) // Corrected URL
  return res.json()
}

const getPredictedCountry = async(name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`) // Corrected URL
  return res.json()
}

interface Params {
  params: { name: string };
}

export default async function Home({ params }: Params) {
  const agePromise = getPredictedAge(params.name)
  const genderPromise = getPredictedGender(params.name) 
  const countryPromise = getPredictedCountry(params.name) 

  const [ageData, genderData, countryData] = await Promise.all([
    agePromise, genderPromise, countryPromise,
  ])

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-8">
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{params.name}</h1>
      {ageData && (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Predicted Age: <span className="font-semibold">{ageData.age}</span>
        </p>
      )}
      {genderData && (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Predicted Gender: <span className="font-semibold">{genderData.gender}</span>
        </p>
      )}
      {countryData && countryData.country && countryData.country[0] && (
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Predicted Country: <span className="font-semibold">{countryData.country[0].country_id}</span>
        </p>
      )}
    </div>
  </main>
  );
}
