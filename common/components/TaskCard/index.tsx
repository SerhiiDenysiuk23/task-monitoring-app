import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Card } from 'antd'
import { useSession } from 'next-auth/react'
import React from 'react'
import {
  useDeleteTaskMutation,
  useGetTaskByIdQuery,
} from '../../api/taskApi/task.api'
import { useGetUserByIdQuery } from '../../api/userApi/user.api'
import DeleteButton from '../UI/Buttons/DeleteButton'
import { dateToDefaultFormat } from '../features/formatDate'
import s from './style.module.scss'

const TaskCard = ({ taskId }) => {
  const { data: session } = useSession()
  const { data } = useGetTaskByIdQuery(`${taskId}`, {
    skip: !taskId,
  })
  const task = data?.data

  const { data: userData } = useGetUserByIdQuery(`${task?.creator}`, {
    skip: !task,
  })
  const user = userData?.data

  const [deleteTask] = useDeleteTaskMutation()

  const taskDelete = (id) => {
    deleteTask(id)
  }

  const Actions = [
    <Button key="edit" type="primary">
      <EditOutlined />
    </Button>,
    <DeleteButton key="delete" onDelete={() => taskDelete(taskId)} />,
  ]

  return (
    <Card className={s.Card}>
      <div className={s.UserInfo}>
        <Avatar
          icon={<UserOutlined />}
          size={200}
          src={!task?.customer ? user?.image : null}
        />
        <h2>{task?.customer ? task?.customer : user?.name}</h2>
      </div>

      <Card
        className={s.TaskInfo}
        title={task?.name}
        actions={session?.user?.email === user?.email && Actions}
      >
        <p className={s.Description}>Description: {task?.desription}</p>
        <p>Category: {task?.category}</p>
        <p>Adress: {task?.address?.name}</p>
        <p>DeadLine: {dateToDefaultFormat(task?.deadline)}</p>
      </Card>
    </Card>
  )
}

export default TaskCard
