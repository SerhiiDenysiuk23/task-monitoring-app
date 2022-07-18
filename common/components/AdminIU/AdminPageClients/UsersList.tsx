import React, { useState } from 'react'
import { List } from 'antd'
import UserInfo from 'common/components/UserCard'
import { IUser } from 'common/modules/models/User'
import s from './style.module.scss'

interface Props {
  users: IUser[]
}

const Users: React.FC<Props> = ({ users }) => {
  const [user, setUser] = useState(users[0])

  if (!users || users.length === 0)
    return <h2 style={{ color: 'var(--textColor)' }}>No users</h2>

  return (
    <div className={s.Container}>
      <List
        className={s.List}
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            key={item._id}
            onClick={() => setUser(item)}
            className={`${s.ListItem} ${user._id === item._id ? s.Active : ''}`}
          >
            {item.name || item.email}
          </List.Item>
        )}
      />

      <UserInfo user={user} />
    </div>
  )
}
export default Users
