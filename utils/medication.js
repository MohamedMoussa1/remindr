const got = require("got")


const searchMedication = async (name, limit) => {
  try {
    const result = await got(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${name}&limit=${limit}`, { json: true })
    return result.body.results.map(createMedicationFromApi)
  } catch (err) {
    return []
  }
}

const getMedication = async (id) => {
  try {
    const result = await got(`https://api.fda.gov/drug/label.json?search=id:${id}&limit=${1}`, { json: true })
    return createMedicationFromApi(result.body.results[0])
  } catch (err) {
    return null
  }
}

function createMedicationFromApi(results) {
  return {
    id: results.id,
    brand_name: results.openfda.brand_name[0],
    generic_name: results.openfda.generic_name[0],
    manufacturer_name: results.openfda.manufacturer_name[0],
    purpose: results.purpose[0]
  }
}

module.exports = { searchMedication, getMedication }