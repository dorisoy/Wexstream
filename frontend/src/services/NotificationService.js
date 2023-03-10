import axios from 'axios'
import { authHeader } from './UserService'
import { API_HOST, PAGE_SIZE } from '../config/env'

export const notify = (data) => (
    axios.post(API_HOST + '/api/notify', data, { headers: authHeader() })
        .then(res => res.status)
)

export const markAsRead = (notificationId) => (
    axios.post(API_HOST + '/api/mark-notification-as-read/' + encodeURIComponent(notificationId), null, { headers: authHeader() })
        .then(res => res.status)
)

export const markAllAsRead = (userId) => (
    axios.post(API_HOST + '/api/mark-notifications-as-read/' + encodeURIComponent(userId), null, { headers: authHeader() })
        .then(res => res.status)
)

export const markAsUnread = (notificationId) => (
    axios.post(API_HOST + '/api/mark-notification-as-unread/' + encodeURIComponent(notificationId), null, { headers: authHeader() })
        .then(res => res.status)
)

export const approve = (notificationId) => (
    axios.post(API_HOST + '/api/approve/' + encodeURIComponent(notificationId), null, { headers: authHeader() })
        .then(res => res.status)
)

export const decline = (notificationId) => (
    axios.post(API_HOST + '/api/decline/' + encodeURIComponent(notificationId), null, { headers: authHeader() })
        .then(res => res.status)
)

export const getNotifications = (userId, page) => (
    axios.get(API_HOST + '/api/notifications/' + encodeURIComponent(userId) + '/' + page + '/' + PAGE_SIZE, { headers: authHeader() })
        .then(res => res.data)
)

export const getNotification = (userId, senderConnectionId, approverConnectionId) => (
    axios.get(API_HOST + '/api/notification/' + encodeURIComponent(userId) + '/' + encodeURIComponent(senderConnectionId) + '/' + encodeURIComponent(approverConnectionId), { headers: authHeader() })
        .then(res => res.data)
)

export const deleteNotification = (notificationId) => (
    axios.delete(API_HOST + '/api/delete-notification/' + encodeURIComponent(notificationId), { headers: authHeader() })
        .then(res => res.status)
)

export const deleteNotifications = (userId) => (
    axios.delete(API_HOST + '/api/delete-notifications/' + encodeURIComponent(userId), { headers: authHeader() })
        .then(res => res.status)
)

export const getNotificationCounter = (userId) => (
    axios.get(API_HOST + '/api/notification-counter/' + encodeURIComponent(userId), { headers: authHeader() })
        .then(res => res.data)
)