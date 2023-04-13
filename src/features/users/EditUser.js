import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import EditUserForm from './EditUserForm'
import { useGetUsersQuery } from './usersApiSlice'

const EditUser = () => {
    const { id } = useParams()

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>

    return content
}
export default EditUser