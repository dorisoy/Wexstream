import React, { useState, useEffect } from 'react'
import { strings } from '../config/lang'
import { getUserById, updateAvatar, deleteAvatar, getCurrentUser, getLanguage } from '../services/UserService'
import Button from '@mui/material/Button'
import MaterialAvatar from '@mui/material/Avatar'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Badge from '@mui/material/Badge'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import DeleteIcon from '@mui/icons-material/BrokenImageTwoTone'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { CDN } from '../config/env'
import * as Helper from '../common/Helper'

const Avatar = (props) => {
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState(null)

    const handleChange = (e) => {

        if (props.onBeforeUpload) {
            props.onBeforeUpload()
        }

        const { _id } = user
        const reader = new FileReader()
        const file = e.target.files[0]

        reader.onloadend = () => {
            updateAvatar(_id, file)
                .then(
                    status => {
                        if (status === 200) {
                            getUserById(_id)
                                .then(user => {
                                    if (user) {
                                        setUser(user)
                                        if (props.onChange) {
                                            props.onChange(user)
                                        }
                                    } else {
                                        Helper.error()
                                        if (props.onChange) {
                                            props.onChange(user)
                                        }
                                    }
                                }).catch(err => {
                                    Helper.error(null, err)
                                    if (props.onChange) {
                                        props.onChange(user)
                                    }
                                })
                        } else {
                            Helper.error()
                            if (props.onChange) {
                                props.onChange(user)
                            }
                        }
                    }
                ).catch(err => {
                    Helper.error(null, err)
                    if (props.onChange) {
                        props.onChange(user)
                    }
                })
        }

        reader.readAsDataURL(file)
    }

    const handleUpload = (e) => {
        const upload = document.getElementById('upload')
        upload.value = ''
        setTimeout(() => {
            upload.click(e)
        }, 0)
    }

    const openDialog = () => {
        setOpen(true)
    }

    const handleDeleteAvatar = (e) => {
        e.preventDefault()
        openDialog()
    }

    const closeDialog = () => {
        setOpen(false)
    }

    const handleCancelDelete = (e) => {
        closeDialog()
    }

    const handleDelete = (e) => {
        const { _id } = user
        deleteAvatar(_id)
            .then(status => {
                if (status === 200) {
                    getUserById(_id)
                        .then(user => {
                            if (user) {
                                setUser(user)
                                if (props.onChange) {
                                    props.onChange(user)
                                }
                                closeDialog()
                            } else {
                                Helper.error()
                            }
                        }).catch(err => {
                            Helper.error(null, err)
                        })
                } else {
                    Helper.error()
                }
            }).catch(err => {
                Helper.error(null, err)
            })
    }

    const joinURL = (part1, part2) => {
        if (part1.charAt(part1.length - 1) === '/') {
            part1 = part1.substr(0, part1.length - 1)
        }
        if (part2.charAt(0) === '/') {
            part2 = part2.substr(1)
        }
        return part1 + '/' + part2
    }

    useEffect(() => {
        const language = getLanguage()
        strings.setLanguage(language)

        const currentUser = getCurrentUser()
        if (currentUser) {
            setUser(props.user)
        } else {
            setError(true)
        }
    }, [props.user])


    const { loggedUser, size, readonly, className } = props
    return (
        !error && loggedUser && user
            ?
            <div className={className}>
                {loggedUser._id === user._id && !readonly
                    ?
                    <div>
                        <input id="upload" type="file" hidden onChange={handleChange} />
                        {user.avatar
                            ?
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                badgeContent={
                                    <Box borderRadius="50%" className="avatar-action-box" onClick={handleDeleteAvatar}>
                                        <DeleteIcon className={user.language === 'ar' ? 'avatar-action-icon-rtl' : 'avatar-action-icon'} />
                                    </Box>
                                }
                            >
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    badgeContent={
                                        <Box borderRadius="50%" className="avatar-action-box" onClick={handleUpload}>
                                            <PhotoCameraIcon className={user.language === 'ar' ? 'avatar-action-icon-rtl' : 'avatar-action-icon'} />
                                        </Box>
                                    }
                                >
                                    <MaterialAvatar
                                        src={user.avatar.startsWith('http') ? user.avatar : joinURL(CDN, user.avatar)}
                                        className="avatar"
                                    />
                                </Badge>
                            </Badge>
                            :
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                badgeContent={
                                    <div>
                                        <Box borderRadius="50%" className="avatar-action-box" onClick={handleUpload}>
                                            <PhotoCameraIcon className={user.language === 'ar' ? 'avatar-action-icon-rtl' : 'avatar-action-icon'} />
                                        </Box>
                                    </div>}
                            >
                                <MaterialAvatar className="avatar">
                                    <AccountCircle className="avatar" />
                                </MaterialAvatar>
                            </Badge>
                        }
                    </div>
                    :
                    (
                        user.avatar
                            ?
                            <MaterialAvatar
                                src={user.avatar.startsWith('http') ? user.avatar : joinURL(CDN, user.avatar)}
                                className={size ? 'avatar-' + size : 'avatar'} />
                            :
                            <AccountCircle className={size ? 'avatar-' + size : 'avatar'} color={props.color || 'inherit'} />
                    )
                }
                <Dialog
                    disableEscapeKeyDown
                    maxWidth="xs"
                    open={open}
                >
                    <DialogTitle>{strings.CONFIRM_TITLE}</DialogTitle>
                    <DialogContent>{strings.DELETE_AVATAR_CONFIRM}</DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancelDelete} color="inherit">{strings.CANCEL}</Button>
                        <Button onClick={handleDelete} color="error">{strings.DELETE}</Button>
                    </DialogActions>
                </Dialog>
            </div>
            :
            <></>
    )
}

export default Avatar