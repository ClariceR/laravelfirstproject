import {ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function usePets() {
    const pet = ref([])
    const pets = ref([])

    const errors = ref('')
    const router = useRouter()

    const getPets = async () => {
        let response = await axios.get('/api/pets')
        pets.value = response.data.data
    }

    const getPet = async (id) => {
        let response = await axios.get(`/api/pets/${id}`)
        pets.value = response.data.data
    }

    const storePet = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/pets', data)
            await router.push({ name: 'pets.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updatePet = async (id) => {
        errors.value = ''
        try {
            await axios.put(`/api/pets/${id}`, pet.value)
            await router.push({ name: 'pets.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyPet = async (id) => {
        await axios.delete(`/api/pets/${id}`)
    }

    return {
        errors,
        pet,
        pets,
        getPet,
        getPets,
        storePet,
        updatePet,
        destroyPet
    }
}