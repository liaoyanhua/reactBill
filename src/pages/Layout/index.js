import { Outlet, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBillList } from '@/store/modules/billStore'
import './index.scss'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline,
} from 'antd-mobile-icons'

const tabs = [
  {
    key: '/',
    title: '月度账单',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
  },
]

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  })
  const navigate = useNavigate()
  const toPageRouter = (path) => {
    console.log(path)
    navigate(path)
  }
  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={toPageRouter}>
          {tabs.map((item) => {
            return (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            )
          })}
        </TabBar>
      </div>
      {/* <Outlet />
      我是Layout
      <Button color="primary">全局测试</Button>
      <div className="purple">
        <Button color="primary">局部测试</Button>
      </div> */}
    </div>
  )
}

export default Layout
