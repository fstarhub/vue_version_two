import Mock from 'mockjs'
import data from './post.json'

Mock.mock('/echart','get',data)