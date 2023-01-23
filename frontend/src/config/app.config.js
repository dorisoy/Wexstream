import LocalizedStrings from 'react-localization'
import * as Env from '../config/env.config'
import * as UserService from '../services/UserService'

export const strings = new LocalizedStrings({
	en: {
		APP_TITLE: 'Wexstream - Secure High Definition Video Conferencing',
		APP_DESCRIPTION: 'Stay in touch with all your teams, family, friends, or colleagues. Instant video conferences, efficiently adapting to your scale for free.',
		FULL_NAME: 'Full Name',
		INVALID_EMAIL: 'Invalid email address',
		CONFIRM_PASSWORD: 'Confirm Password',
		SIGN_UP: 'Sign up',
		SIGN_UP_HEADING: 'Sign up',
		ERROR_IN_RECAPTCHA: 'Fill out the captcha to continue.',
		ERROR_IN_PASSWORD: 'Password must be at least 6 characters long.',
		PASSWORDS_DONT_MATCH: "Passwords don't match.",
		ERROR_IN_SIGN_UP: 'An error occurred during sign up.',
		ERROR_IN_SIGN_IN: "We can't sign in to your account.",
		ERROR_IN_PROFILE: 'Error while saving user profile.',
		EMAIL: 'Email',
		PASSWORD: 'Password',
		AUTHENTICATING: 'Authenticating...',
		VALIDATE_EMAIL: "A validation email has been sent to your email address. Please check your mailbox and validate your account by clicking the link in the email. It will be expire after one day. If you didn't receive validation email click on resend.",
		RESEND: 'Resend',
		VALIDATION_EMAIL_SENT: 'Validation email sent.',
		VALIDATION_EMAIL_ERROR: 'An error occurred while sending validation email.',
		SAVE: 'Save',
		CANCEL: 'Cancel',
		SEARCH_PLACEHOLDER: 'Search...',
		SIGN_IN: 'Sign in',
		SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
		SIGN_IN_WITH_EMAIL: 'Sign in with Email',
		SIGN_IN_HEADING: 'Sign in',
		HOME: 'Home',
		ABOUT: 'About',
		TOS: 'Terms of Service',
		SIGN_OUT: 'Sign out',
		SETTINGS: 'Settings',
		LANGUAGE_EN: 'English',
		LANGUAGE_FR: 'Français',
		MESSAGES: 'Messages',
		NOTIFICATIONS: 'Notifications',
		COPY: 'Copy to clipboard',
		EMAIL_SHARE: 'Share by email',
		FACEBOOK: 'Share on Facebook',
		TWITTER: 'Share on Twitter',
		WHATSAPP: 'Share on WhatsApp',
		SUBJECT: 'Join the conference ',
		PROFILE_HEADING: 'Profile',
		USER_UPDATE: 'User profile updated successfully.',
		USER_UPDATE_ERROR: 'An error occurred while updating user profile.',
		DELETE_ACCOUNT: 'Delete Account',
		DELETE_ACCOUNT_ERROR: 'An error occurred while deleting account.',
		DELETE_ACCOUNT_CONFIRM: 'Deleting your account is permanent and will remove all content. Are you sure you want to delete your account?',
		SPASSWORD_RESET_HEADING: 'Password Reset',
		CURRENT_PASSWORD: 'Current Password',
		NEW_PASSWORD: 'New Password',
		CURRENT_PASSWORD_ERROR: 'Wrong password',
		NEW_PASSWORD_REQUIRED_ERROR: 'New password is required',
		PASSWORD_UPDATE: 'Your password was changed successfully.',
		PASSWORD_UPDATE_ERROR: 'An error occurred while updating password.',
		CHANGE_LANGUAGE_ERROR: 'An error occurred while changing language.',
		NETWORK: 'Network',
		CONNECT: 'Connect',
		DISCONNECT: 'Disconnect',
		CONNECTION_PENDING: 'Connection pending',
		CONNECTED: 'Connected',
		CONNECTION_CANCELED: 'Connection request canceled successfully.',
		CONNECTION_DELETED: 'Disconnected successfully.',
		CONNECTION_DELETE_ERROR: 'An error occurred while disconnecting.',
		SEND_MESSAGE: 'Message',
		CONNECTION_REQUEST_SENT: 'Connection request sent.',
		CONNECTION_REQUEST_ERROR: 'An error occurred while sending connection request.',
		CONNECTION_REQUEST_NOTIFICATION: 'sent you a connection request.',
		APPROVE: 'Approve',
		DECLINE: 'Decline',
		CONNECTION_APPROVE: 'Connected successfully.',
		CONNECTION_APPROVE_ERROR: 'An error occurred while approving connection request.',
		CONNECTION_DECLINE: 'Connection request rejected successfully.',
		CONNECTION_DECLINE_ERROR: 'An error occurred while rejecting connection request.',
		NOTIFICATION_DELETE: 'Notification deleted successfully.',
		NOTIFICATION_DELETE_ERROR: 'An error occurred while deleting notification.',
		NO_NOTIFICATION: 'You have no notification.',
		CONNECTION_APPROVE_NOTIFICATION: 'You are now connected to',
		CONNECTION_REJECT_NOTIFICATION: 'rejected your connection request.',
		CONNECTIONS: 'Connections',
		NO_CONNECTION: 'You have no connection.',
		AT: 'at',
		TOS_PREAMBLE_TITLE: 'PREAMBLE',
		TOS_PREAMBLE_P1: 'Wexstream lets you stay in touch with all your teams, family, friends, or colleagues. Instant video conferences, efficiently adapting to your scale for free.',
		TOS_PREAMBLE_P2: 'Wexstream is hosted on a high performance and secure server with a large bandwidth and was developed using most recent and performant technologies, which allows the platform to handle a large number of conferences and participants.',
		TOS_PREAMBLE_1: 'Unlimited users: There are no artificial restrictions on the number of users or conference participants. Server power and bandwidth are the only limiting factors.',
		TOS_PREAMBLE_2: 'Privacy settings, passwords and meeting locks puts the control in your hands.',
		TOS_PREAMBLE_3: 'Lock-protected rooms: Control the access to your conferences with a password.',
		TOS_PREAMBLE_4: 'Desktop screen sharing, chat, and many useful features.',
		TOS_PREAMBLE_5: 'Encrypted by default.',
		TOS_PREAMBLE_6: 'Protected conferences using TLS encryption and end-to-server/transit encryption.',
		TOS_PREAMBLE_7: 'High quality: Audio and video are delivered with the clarity and richness of Opus and VP8.',
		TOS_PREAMBLE_8: 'Web ready: No downloads are required of your friends to join the conversation. Wexstream works directly within their browsers as well. Simply share your conference URL with others to get started.',
		TOS_PREAMBLE_9: 'Mobile ready: Accessible, legible, and usable across all devices.',
		TOS_PREAMBLE_10: "Users' personal data is neither resold nor communicated to third parties.",
		TOS_PREAMBLE_11: 'Users have the right to access, modify, rectify and delete their personal data.',
		TOS_SUBSCRIBING_TITLE: 'SUBSCRIBING',
		TOS_SUBSCRIBING_1: 'To access the services, the user must create an account by registering for free.',
		TOS_SUBSCRIBING_2: 'The user is required to provide true and accurate information which he undertakes to update immediately in the event of any changes.',
		TOS_SUBSCRIBING_3: 'Access to the platform is protected by a username and password chosen by the user when registering. The user is solely responsible for any use that may be made of his username and password, and sole guarantor of their confidentiality, as well as any use of his account.',
		TOS_SUBSCRIBING_4: 'In the event that the user provides false, inaccurate, outdated or incomplete data, we will be entitled to suspend or close his account and to refuse him, in the future, access to all or part of the services.',
		TOS_SERVICES_TITLE: 'SERVICES',
		TOS_SERVICES_1: 'Once registered, the user can benefit from the following services:',
		TOS_SERVICES_2: 'Easy networking between platform members',
		TOS_SERVICES_3: 'Provision of video conferencing tools',
		TOS_SERVICES_4: 'Provision of communication tools between platform members',
		TOS_SERVICES_5: 'The platform works as follows:',
		TOS_SERVICES_6: 'The user creates a network by connecting with others.',
		TOS_SERVICES_7: 'The user broadcasts private or public conferences.',
		TOS_SERVICES_8: 'When broadcasting a conference, the user gets a URL that he can share to invite others to join him.',
		TOS_SERVICES_9: "When broadcasting a conference, the user's network is notified.",
		TOS_ACCESS_TITLE: 'ACCESS TO SERVICES',
		TOS_ACCESS_1: 'Access to the platform and the services is exclusively reserved for registered users. Users broadcast online learning videos, webinairs, lectures, or live streams, or attend online learning courses, webinairs, conferences, or live streams, and have access to IT and telecommunication resources allowing access to the platform.',
		TOS_ACCESS_2: 'The platform is accessible 24/7 for all users. We reserve the right, without notice or compensation, to temporarily or permanently close the platform or access to one or more services to make any update, modifications or change in operational methods, servers and accessibility hours, without this list being exhaustive. We reserve the right to make any modifications and improvements to the platform and to the services that we find necessary or useful for the proper functioning of the platform and its services.',
		TOS_LITIGATIONS_TITLE: 'LITIGATIONS',
		TOS_LITIGATIONS: 'We are not responsible for the collaboration between the broadcasters and the users, but we may be able to help resolve any dispute.',
		TOS_COMMITMENTS_TITLE: 'COMMITMENTS',
		TOS_COMMITMENTS: 'Users undertake to make fair use of the platform and services and expressly refrain from circumventing the services and the platform. Consequently, any user is prohibited from extracting content from the platform for a similar or concurrent activity.',
		TOS_RESPONSIBILITY_TITLE: 'RESPONSIBILITY',
		TOS_RESPONSIBILITY_1: 'The user is responsible for the direct or indirect damage that he is likely to suffer as a result of inaccurate, incomplete, and/or misleading information that he provides when registering or in the absence of updating his information, for which he alone assumes the consequences.',
		TOS_RESPONSIBILITY_2: 'The user is responsible for all the content he chooses to broadcast.',
		TOS_RESPONSIBILITY_3: "The user is expressly forbidden to publish any content, engage in any activity, stream any feed or create any account that is offensive, pornographic, violent, abusive, defamatory, threatening or obscene,  illegal or intended to promote or commit an illegal act, including violations of intellectual property rights, privacy rights or proprietary rights, denigrating, slanderous, racist, xenophobic, contrary to morality and good morals, infringing content, undermining public order or rights, likely to infringe the rights, reputation and image of the platform and more generally, the content of which would violate the law and/or regulations, in particular of a criminal nature, includes his password, or purposely includes someone else's password, personal data, or is intended to solicit such data, misleads or deceives, or is likely to mislead or deceive, others as to his identity or affiliation with another person or organisation, breaches any of his obligations under the terms of use of the platform or any of its incorporated policies.",
		TOS_PRIVACY_TITLE: 'PRIVACY',
		TOS_PRIVACY_1: 'We protect your live and hosted content using TLS encryption and end-to-server/transit encryption. Plus, added privacy settings passwords and meeting locks puts the control in your hands.',
		TOS_PRIVACY_2: "We are committed to using all means to ensure the security and privacy of users' personal data.",
		TOS_PRIVACY_3: "Users' personal data is neither resold nor communicated to third parties.",
		TOS_PRIVACY_4: 'The user has the right to access, modify, rectify and delete his personal data.',
		TOS_SANCTIONS_TITLE: 'DURATION, TERMINATION AND SANCTIONS',
		TOS_SANCTIONS_1: 'This contract is concluded for an indefinite period from the acceptance of the terms of use of the platform by the user.',
		TOS_SANCTIONS_2: "If the user does not respect these terms of use and/or commits any breach of the laws and regulations in force, we are entitled to suspend or close the user's account, automatically, and to deny him, in the future, access to all or part of the services, without prejudice to any damages and interest that we will be entitled to claim.",
		TOS_MODIFICATION_TITLE: 'MODIFICATION OF TERMS OF SERVICE',
		TOS_MODIFICATION_1: "We reserve the right to modify all or part of these conditions of use.",
		TOS_MODIFICATION_2: "We will inform the user of the modifications made to these general conditions as soon as they are posted on the platform.",
		TOS_LAW_TITLE: 'APPLICABLE LAW AND COMPETENT JURISDICTION',
		TOS_LAW: 'Any dispute relating to the formation of these terms of service, conclusion, interpretation and/or execution falls under the exclusive jurisdiction of the courts within the jurisdiction of the Casablanca Court of Appeal in Morocco.',
		TOS_SIGN_UP: 'I read and agree with the Terms of Use.',
		GENERIC_ERROR: 'An unhandled error occurred.',
		ABOUT_TITLE: 'ABOUT',
		ABOUT_USER_FRIENDLY_TITLE: 'EASY TO USE',
		ABOUT_USER_FRIENDLY_1: 'Wexstream is simple, flexible and easy to use, no matter your location.',
		ABOUT_USER_FRIENDLY_2: 'Users can instantly jump into a webcast online, no download required.',
		ABOUT_SECURE_TITLE: 'SECURE',
		ABOUT_CONTENT_TITLE: 'NEAT CONTENT',
		NO_MESSAGE: 'You have no message.',
		NEW_MESSAGE: 'New Message',
		TO: 'To',
		MESSAGE_SUBJECT: 'Subject',
		MESSAGE_BODY: 'Message',
		SEND: 'Send',
		MESSAGE_SENT: 'Message sent.',
		FROM: 'From',
		SETTINGS_EMAIL_NOTIFICATIONS: 'Enable email notifications',
		SETTINGS_PRIVATE_MESSAGES: 'Enable private messages',
		SETTING_UPDATED: 'Setting updated successfully.',
		DELETE_MESSAGE_CONFIRM: 'Are you sure you want to delete this message?',
		PROFILE_SETTINGS: 'Profile Settings',
		NETWORK_SETTINGS: 'Network Settings',
		DZ_DELETE_ACCOUNT: 'Once you delete your account, there is no going back.',
		DELETE_AVATAR: 'Delete Profile Picture',
		DELETE_AVATAR_CONFIRM: 'Are you sure you want to delete your profile picture?',
		DELETE: 'Delete',
		USER_NOT_FOUND: 'User not found.',
		LOADING: 'Loading...',
		MARK_AS_READ: 'Mark as read',
		MARK_ALL_AS_READ: 'Mark all as read',
		MARK_AS_UNREAD: 'Mark as unread',
		DELETE_ALL: 'Delete all',
		BIO: 'Bio',
		LOCATION: 'Location',
		WEBSITE: 'Website',
		INVALID_URL: 'Invalid URL',
		JOINED_AT: 'Joined at',
		CONFIRM_TITLE: 'Confirmation',
		DECLINE_CONFIRM: 'Are you sure you want to decline connection request?',
		DISCONNECT_CONFIRM: 'Are you sure you want to disconnect?',
		CANCEL_CONFIRM: 'Are you sure you want to cancel connection request?',
		YES: 'Yes',
		LIVE_STREAM: 'Live',
		START: 'Start',
		TITLE: 'Title (Required)',
		INVALID_TITLE: 'Must be at least 3 characters long.',
		DESCRIPTION: 'Description (Optional)',
		PRIVATE_LIVE: 'Private (Accessible to your network only)',
		CONFERENCE_NOT_FOUND: 'Conference not found.',
		CONFERENCE_UNAUTHORIZED: 'Unauthorized to access this conference.',
		CONFERENCE_CLOSED: 'Conference closed.',
		CONFERENCE_URL_COPIED: 'Conference URL copied to clipboard.',
		LEAVING: 'Leaving...',
		EMPTY_TIMELINE: 'Empty timeline',
		LOADING_TIMELINE: 'Loading timeline...',
		LIVE: 'Live',
		DELETE_CONFERENCE_CONFIRM: 'Are you sure you want to delete this conference?',
		CLOSE: 'Close',
		PRPARING_CONFERENCE: 'Preparing conference...',
		NETWORK_UPDATED: 'Network update.',
		DELETE_ENTRY_CONFIRM: 'Are you sure you want to delete this entry?',
		LOADING_NOTIFICATIONS: 'Loading notifications...',
		SIGNIN_VIDEO_CONFERENCING: 'Secure Video Conferencing',
		SIGNIN_PRIVACY: 'Your Privacy is our Priority',
		SIGNIN_PROTECTION: 'We ensure your Protection',
		DELETING: 'Deleting account...',
		EXTERNAL_API_ERROR: 'Failed to load conferencing API.',
		REPORT: 'Report',
		BLOCK: 'Block',
		PROFILE_UNAUTHORIZED: 'Unauthorized to view this profile.',
		MESSAGE: 'Message',
		REPORT_SUCCESS: 'User reported successfully.',
		BLOCK_CONFIRM: 'Are you sure you want to block this user?',
		BLOCK_SUCCESS: 'User blocked successfully.',
		UNBLOCK_SUCCESS: 'User unblocked successfully.',
		UNBLOCK_CONFIRM: 'Are you sure you want to unblock this user?',
		UNBLOCK: 'Unblock',
		PUBLIC: 'Public',
		PRIVATE: 'Private',
		MEMBERS: 'Members',
		NO_MEMBER: 'No members',
		IS_BLACKLISTED: 'Your account is suspended.',
		CONTACT: 'Contact',
		TECHNICAL_ISSUES_TITLE: 'Technical Issues',
		TECHNICAL_ISSUES: 'For technical issues and bug reporting, contact admin@wexstream.com.',
		OTHER_REQUESTS_TITLE: 'Other Requests',
		OTHER_REQUESTS: 'For requests related to the platform, commercial requests or any other request, contact contact@wexstream.com.',
		LANGUAGE: 'Language',
		NO_RESULT: 'No result',
		RESET_PASSWORD: 'Reset Password',
		PLEASE_WAIT: 'Please wait...',
		SIGN_IN_WITH_FACEBOOK: 'Sign in with Facebook',
		DELETE_ALL_NOTIFICATIONS: 'Are you sure you want to delete all notifications?',
		NO_MATCH: 'Nothing to see here!',
		GO_TO_HOME: 'Go to the home page',
	},
	fr: {
		APP_TITLE: 'Wexstream - Visioconférences sécurisées de haute qualité',
		APP_DESCRIPTION: "Restez en contact avec toutes vos équipes, votre famille, vos amis ou vos collègues. Des visioconférences instantanées qui s'adaptant efficacement à vos besoins gratuitement.",
		FULL_NAME: 'Nom Complet',
		INVALID_EMAIL: 'Adresse e-mail invalide',
		CONFIRM_PASSWORD: 'Confirmer le mot de passe',
		SIGN_UP: "S'inscrire",
		SIGN_UP_HEADING: 'Inscription',
		ERROR_IN_RECAPTCHA: 'Veuillez remplir le captcha pour continuer.',
		ERROR_IN_PASSWORD: 'Le mot de passe doit contenir au moins 6 caractères.',
		PASSWORDS_DONT_MATCH: "Les mots de passe ne correspondent pas.",
		ERROR_IN_SIGN_UP: "Une erreur s'est produite lors de l'inscription.",
		ERROR_IN_SIGN_IN: 'Nous ne pouvons pas nous connecter à votre compte.',
		ERROR_IN_PROFILE: "Erreur lors de l'enregistrement du profil utilisateur.",
		EMAIL: 'E-mail',
		PASSWORD: 'Mot de passe',
		AUTHENTICATING: 'Authentification en cours...',
		VALIDATE_EMAIL: "Un e-mail de validation a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte aux lettres et valider votre compte en cliquant sur le lien dans l'e-mail. Il expirera au bout d'un jour. Si vous n'avez pas reçu d'e-mail de validation, cliquez sur renvoyer.",
		RESEND: 'Renvoyer',
		VALIDATION_EMAIL_SENT: 'E-mail de validation envoyé.',
		VALIDATION_EMAIL_ERROR: "Une erreur s'est produite lors de l'envoi de l'e-mail de validation.",
		SAVE: 'Sauvegarder',
		CANCEL: 'Annuler',
		SEARCH_PLACEHOLDER: 'Rechercher...',
		SIGN_IN: 'Se connecter',
		SIGN_IN_WITH_GOOGLE: 'Se connecter avec Google',
		SIGN_IN_WITH_EMAIL: 'Se connecter par Email',
		SIGN_IN_HEADING: 'Connexion',
		HOME: 'Acceuil',
		ABOUT: 'À propos',
		TOS: "Conditions d'utilisation",
		SIGN_OUT: 'Déconnexion',
		SETTINGS: 'Paramètres',
		LANGUAGE_EN: 'English',
		LANGUAGE_FR: 'Français',
		MESSAGES: 'Messages',
		NOTIFICATIONS: 'Notifications',
		COPY: 'Copier dans le presse-papier',
		EMAIL_SHARE: 'Partager par e-mail',
		FACEBOOK: 'Partager sur Facebook',
		TWITTER: 'Partager sur Twitter',
		WHATSAPP: 'Partager sur WhatsApp',
		SUBJECT: 'Rejoignez la conférence ',
		PROFILE_HEADING: 'Profil',
		USER_UPDATE: 'Profil utilisateur mis à jour avec succès.',
		USER_UPDATE_ERROR: "Une erreur s'est produite lors de la mise à jour du profil utilisateur.",
		DELETE_ACCOUNT: 'Supprimer le compte',
		DELETE_ACCOUNT_ERROR: "Une erreur s'est produite lors de la suppression du compte.",
		DELETE_ACCOUNT_CONFIRM: 'La suppression de votre compte est définitive et supprimera tout le contenu. Êtes-vous sûr de vouloir supprimer votre compte ?',
		SPASSWORD_RESET_HEADING: 'Réinitialisation du mot de passe',
		CURRENT_PASSWORD: 'Mot de passe actuel',
		NEW_PASSWORD: 'Nouveau mot de passe',
		CURRENT_PASSWORD_ERROR: 'Mauvais mot de passe',
		NEW_PASSWORD_REQUIRED_ERROR: 'Nouveau mot de passe requis',
		PASSWORD_UPDATE: 'Votre mot de passe a été mofifié avec succès.',
		PASSWORD_UPDATE_ERROR: "Une erreur s'est produite lors de la modification du mot de passe.",
		CHANGE_LANGUAGE_ERROR: "Une erreur s'est produite lors du changement de langue.",
		NETWORK: 'Réseau',
		CONNECT: 'Se connecter',
		DISCONNECT: 'Se déconnecter',
		CONNECTION_PENDING: 'Connection en attente',
		CONNECTED: 'Connecté',
		CONNECTION_CANCELED: 'La demande de connexion a été annulée avec succès.',
		CONNECTION_DELETED: 'Déconnecté avec succès.',
		CONNECTION_DELETE_ERROR: "Une erreur s'est produite lors de la déconnexion.",
		SEND_MESSAGE: 'Message',
		CONNECTION_REQUEST_SENT: 'Demande de connexion envoyée.',
		CONNECTION_REQUEST_ERROR: "Une erreur s'est produite lors de l'envoi de la demande de connexion.",
		CONNECTION_REQUEST_NOTIFICATION: 'vous a envoyé une demande de connexion.',
		APPROVE: 'Accepter',
		DECLINE: 'Refuser',
		CONNECTION_APPROVE: 'Connecté avec succès.',
		CONNECTION_APPROVE_ERROR: "Une erreur s'est produite lors de l'approbation de la demande de connexion.",
		CONNECTION_DECLINE: 'Demande de connexion rejetée avec succès.',
		CONNECTION_DECLINE_ERROR: "Une erreur s'est produite lors du rejet de la demande de connexion.",
		NOTIFICATION_DELETE: 'Notification supprimée avec succès.',
		NOTIFICATION_DELETE_ERROR: "Une erreur s'est produite lors de la suppression de la notification.",
		NO_NOTIFICATION: "Vous n'avez aucune notification.",
		CONNECTION_APPROVE_NOTIFICATION: 'Vous êtes maintenant connecté à',
		CONNECTION_REJECT_NOTIFICATION: 'a rejeté votre demande de connexion.',
		CONNECTIONS: 'Connexions',
		NO_CONNECTION: "Vous n'avez aucun lien.",
		AT: 'le',
		TOS_PREAMBLE_TITLE: 'PRÉAMBULE',
		TOS_PREAMBLE_P1: "Wexstream vous permet de rester en contact avec toutes vos équipes, votre famille, vos amis ou vos collègues. Des visioconférences instantanées qui s'adaptant efficacement à vos besoins gratuitement.",
		TOS_PREAMBLE_P2: 'Wexstream est hébergé sur un serveur haute performance et sécurisé avec une large bande passante et a été développé en utilisant les technologies les plus récentes et les plus performantes, ce qui permet à la plateforme de gérer un grand nombre de conférences et de participants.',
		TOS_PREAMBLE_1: "Utilisateurs illimités : Il n'y a pas de restrictions sur le nombre d'utilisateurs ou de participants. La puissance du serveur et la bande passante sont les seuls facteurs limitatifs.",
		TOS_PREAMBLE_2: 'Les paramètres de confidentialité, les mots de passe et les verrous de conférences mettent le contrôle entre vos mains.',
		TOS_PREAMBLE_3: "Salles fermées : Contrôlez l'accès à vos conférences avec un mot de passe.",
		TOS_PREAMBLE_4: "Partage d'écran de bureau, chat et de nombreuses fonctionnalités utiles.",
		TOS_PREAMBLE_5: 'Chiffré par défaut.',
		TOS_PREAMBLE_6: "Conférences protégées à l'aide du cryptage TLS et du cryptage de bout en serveur/transit.",
		TOS_PREAMBLE_7: "Haute qualité : l'audio et la vidéo sont livrés avec la clarté et la richesse d'Opus et VP8.",
		TOS_PREAMBLE_8: "Web ready : Aucun téléchargement n'est requis de la part de vos amis pour rejoindre la conversation. Wexstream fonctionne directement dans leurs navigateurs. Partagez simplement l'URL de votre conférence avec d'autres pour commencer.",
		TOS_PREAMBLE_9: 'Mobile ready : Accessible et utilisable sur tous les appareils.',
		TOS_PREAMBLE_10: 'Les données personnelles des utilisateurs ne sont ni revendues ni communiquées à des tiers.',
		TOS_PREAMBLE_11: "Les utilisateurs disposent d'un droit d'accès, de modification, de rectification et de suppression de leurs données personnelles.",
		TOS_SUBSCRIBING_TITLE: 'INSCRIPTION',
		TOS_SUBSCRIBING_1: "Pour pouvoir accéder aux services, l'utilisateur doit créer un compte en s'inscrivant gratuitement.",
		TOS_SUBSCRIBING_2: "L'utilisateur est tenu de fournir des informations exactes qu'il s'engage à mettre immédiatement à jour en cas de modifications.",
		TOS_SUBSCRIBING_3: "L'accès à la plateforme est protégé par un identifiant et un mot de passe choisi par l'utilisateur lors de son inscription. L'utilisateur est seul responsable de tout usage qui pourrait être fait de son identifiant et mot de passe, et seul garant de leur confidentialité, ainsi que de toute utilisation de son compte.",
		TOS_SUBSCRIBING_4: "Dans l'hypothèse où l'utilisateur fournirait des données fausses, inexactes, périmées ou incomplètes, nous serons en droit de suspendre ou de procéder à la fermeture de son compte et de lui refuser, à l'avenir, l'accès à tout ou partie des services.",
		TOS_SERVICES_TITLE: 'SERVICES',
		TOS_SERVICES_1: "Une fois inscrit, l'utilisateur peut bénéficier des services suivants:",
		TOS_SERVICES_2: 'Une mise en relation facilitée entre les membres de la plateforme ',
		TOS_SERVICES_3: "Une mise à disposition d'outils de visioconférence ",
		TOS_SERVICES_4: "Une mise à disposition d'outils de communication entre les membres de la plateforme ",
		TOS_SERVICES_5: 'Fonctionnement de la plateforme :',
		TOS_SERVICES_6: "L'utilisateur crée un réseau en se connectant avec d'autres utilisateurs.",
		TOS_SERVICES_7: "L'utilisateur crée des conférences privées ou publiques.",
		TOS_SERVICES_8: "Lors de la création d'une conférence, l'utilisateur obtient une URL qu'il peux partager pour inviter d'autres utilisateurs à se joindre à lui.",
		TOS_SERVICES_9: "Lors de la création d'une conférence, le réseau de l'utilisateur est notifié de la diffusion en direct.",
		TOS_ACCESS_TITLE: 'ACCÈS AUX SERVICES',
		TOS_ACCESS_1: "L'accès à la plateforme et aux Services est exclusivement réservé aux utilisateurs inscrits. Les utilisateurs diffusent des vidéos d'apprentissage en ligne, des webinairs, des conférences ou des flux en direct, ou assistent à des cours d'apprentissage en ligne, à des webinairs, à des conférences, ou à des flux en direct, et disposent des moyens informatiques et de télécommunications permettant l'accès à la plateforme.",
		TOS_ACCESS_2: "La plateforme est accessible 24h/24, 7j/7 pour l'ensemble des utilisateurs. Nous nous réservons le droit, sans préavis, ni indemnité, de fermer temporairement ou définitivement la plateforme ou l'accès à un ou plusieurs services pour effectuer une mise à jour, des modifications ou un changement sur les méthodes opérationnelles, les serveurs et les heures d'accessibilité, sans que cette liste ne soit limitative. Nous nous réservons le droit d'apporter à la plateforme et aux services toutes les modifications et améliorations que nous jugerons nécessaires ou utiles dans le cadre du bon fonctionnement de la plateforme et de ses services.",
		TOS_LITIGATIONS_TITLE: 'LITIGES',
		TOS_LITIGATIONS: 'Nous ne sommes aucunement responsable de la collaboration entre les diffuseurs de flux en direct et les utilisateurs mais nous pouvons parvenir à aider de manière bénévole à résoudre un éventuel litige.',
		TOS_COMMITMENTS_TITLE: 'ENGAGEMENTS',
		TOS_COMMITMENTS: "Les utilisateurs s'engagent à faire une utilisation loyale de la plateforme et des services et s'interdisent expressément de contourner les services et la plateforme. En conséquence, tout utilisateur s'interdit de procéder à toute extraction du contenu de la plateforme pour une activité similaire ou concurrente.",
		TOS_RESPONSIBILITY_TITLE: 'RESPONSABILITÉ',
		TOS_RESPONSIBILITY_1: "L'utilisateur est seul responsable du préjudice direct ou indirect qu'il est susceptible de subir du fait d'informations inexactes, incomplètes, et/ou trompeuses qu'il fournirait lors de son inscription ou en l'absence de mise à jour de ses informations, ce dont il assume seul les conséquences.",
		TOS_RESPONSIBILITY_2: "L'utilisateur est seul responsable de l'ensemble des contenus qu'il choisit de mettre en ligne. ",
		TOS_RESPONSIBILITY_3: "Il est expressément interdit à l'utilisateur de publier tout contenu, de se livrer à toute activité, de diffuser tout flux ou de créer tout compte à caractère offensant, pornographique, violent, abusif, diffamatoire, menaçant ou obscène, illégal ou destiné à promouvoir ou à commettre un acte illégal, y compris violations des droits de propriété intellectuelle, des droits à la vie privée ou des droits de propriété, dénigrant, diffamatoire, raciste, xénophobe, contraire aux bonnes mœurs, portant atteinte aux contenus, portant atteinte à l'ordre ou aux droits publics, susceptibles de porter atteinte aux droits, à la réputation ou à l'image de la plateforme et plus généralement, dont le contenu contreviendrait à la loi et/ou aux réglementations, notamment à caractère pénal, comprenant son mot de passe, ou comprenant intentionnellement le mot de passe d'autrui, des données personnelles, ou vise à solliciter de telles données, induit en erreur ou trompe, ou est susceptible d'induire en erreur ou de tromper, d'autres quant à son identité ou son affiliation à une autre personne ou organisation, manque à l'une de ses obligations en vertu des conditions d'utilisation de la plateforme ou de l'une de ses politiques.",
		TOS_PRIVACY_TITLE: 'CONFIDENTIALITÉ',
		TOS_PRIVACY_1: "Nous protégeons votre contenu en direct et hébergé à l'aide du cryptage TLS et du cryptage de bout en serveur/transit. De plus, l'ajout de mots de passe pour les paramètres de confidentialité et de verrous de réunions vous donne le contrôle.",
		TOS_PRIVACY_2: 'Nous nous engageons à mettre tous les moyens en œuvre pour assurer la sécurité et la confidentialité de données personnelles des utilisateurs.',
		TOS_PRIVACY_3: 'Les  données personnelles des utilisateurs ne sont ni revendues ni communiquées à des tiers.',
		TOS_PRIVACY_4: "L'utilisateur dispose d'un droit d'accès, de modification, de rectification et de suppression des données à caractère personnel qui le concernent.",
		TOS_SANCTIONS_TITLE: 'DURÉE, RÉSILIATION ET SANCTIONS',
		TOS_SANCTIONS_1: "Le présent contrat est conclu pour une durée indéterminée à compter de l'acceptation des conditions générales d'utilisation de la plateforme par l’utilisateur.",
		TOS_SANCTIONS_2: "Dans le cas où l'utilisateur ne respecterait pas les présentes conditions générales d'utilisation et/ou commettrait un quelconque manquement aux lois et règlements en vigueur, nous sommes en droit de suspendre ou fermer le compte de l'utilisateur, automatiquement et de plein droit, et de lui refuser, à l'avenir, l'accès à tout ou partie des services, sans préjudice de tous dommages et intérêts éventuels que nous serons en droit de réclamer.",
		TOS_MODIFICATION_TITLE: "MODIFICATION DES CONDITIONS D'UTILISATION",
		TOS_MODIFICATION_1: "Nous nous réservons la possibilité de modifier tout ou partie des présentes conditions d'utilisation.",
		TOS_MODIFICATION_2: "Nous informerons l'utilisateur des modifications apportées aux présentes conditions générales dès leur mise en ligne sur la plateforme.",
		TOS_LAW_TITLE: 'DROIT APPLICABLE ET JURIDICTION COMPÉTENTE',
		TOS_LAW: "Tout litige relatif à la formation de ces présentes conditions générales d'utilisation, conclusion, interprétation et/ou exécution relève de la compétence exclusive des juridictions dans le ressort de la cour d'appel de Casablanca au Maroc.",
		TOS_SIGN_UP: "J'ai lu et j'accepte les conditions générales d'utilisation.",
		GENERIC_ERROR: "Une erreur non gérée s'est produite.",
		ABOUT_TITLE: 'À PROPOS',
		ABOUT_USER_FRIENDLY_TITLE: 'FACILE À UTILISER',
		ABOUT_USER_FRIENDLY_1: 'Wexstream est simple, flexible et facile à utiliser, quel que soit votre emplacement.',
		ABOUT_USER_FRIENDLY_2: 'Les utilisateurs peuvent accéder instantanément à une diffusion en ligne, aucun téléchargement requis.',
		ABOUT_SECURE_TITLE: 'SÉCURISÉE',
		ABOUT_CONTENT_TITLE: 'CONTENU SOIGNÉ',
		NO_MESSAGE: "Vous n'avez aucun message.",
		NEW_MESSAGE: 'Nouveau Message',
		TO: 'À',
		MESSAGE_SUBJECT: 'Objet',
		MESSAGE_BODY: 'Message',
		SEND: 'Envoyer',
		MESSAGE_SENT: 'Message envoyé.',
		FROM: 'De',
		SETTINGS_EMAIL_NOTIFICATIONS: 'Activer les notifications par email',
		SETTINGS_PRIVATE_MESSAGES: 'Activer les messages privés',
		SETTING_UPDATED: 'Paramètre mis à jour avec succès.',
		DELETE_MESSAGE_CONFIRM: 'Êtes-vous sur de vouloir supprimer ce message ?',
		PROFILE_SETTINGS: 'Paramètres du Profil',
		NETWORK_SETTINGS: 'Paramètres du Réseau',
		DZ_DELETE_ACCOUNT: "Une fois que vous avez supprimé votre compte, vous ne pouvez plus revenir en arrière.",
		DELETE_AVATAR: 'Supprimer la photo de profil',
		DELETE_AVATAR_CONFIRM: 'Êtes-vous sûr de vouloir supprimer votre photo de profil ?',
		DELETE: 'Supprimer',
		USER_NOT_FOUND: 'Utilisateur non trouvé.',
		LOADING: 'Chargement...',
		MARK_AS_READ: 'Marquer comme lu',
		MARK_ALL_AS_READ: 'Marquer tout comme lu',
		MARK_AS_UNREAD: 'Marquer comme non lu',
		DELETE_ALL: 'Tout supprimer',
		BIO: 'Bio',
		LOCATION: 'Localisation',
		WEBSITE: 'Site Web',
		INVALID_URL: 'URL invalide',
		JOINED_AT: 'Inscrit le',
		CONFIRM_TITLE: 'Confirmation',
		DECLINE_CONFIRM: 'Êtes-vous sûr de vouloir refuser la connexion ?',
		DISCONNECT_CONFIRM: 'Êtes-vous sûr de vouloir supprimer la connexion ?',
		CANCEL_CONFIRM: 'Êtes-vous sûr de vouloir annuler la connexion ?',
		YES: 'Oui',
		LIVE_STREAM: 'Direct',
		START: 'Démarrer',
		TITLE: 'Titre (Obligatoire)',
		INVALID_TITLE: 'Doit comporter au moins 3 caractères.',
		DESCRIPTION: 'Description (Facultative)',
		PRIVATE_LIVE: 'Privée (Accessible à votre réseau uniquement)',
		CONFERENCE_NOT_FOUND: 'Conférence introuvable.',
		CONFERENCE_UNAUTHORIZED: 'Non autorisé à accéder à cette conférence.',
		CONFERENCE_CLOSED: 'Conférence terminée.',
		CONFERENCE_URL_COPIED: 'URL de la conférence copiée.',
		LEAVING: 'Fermeture...',
		EMPTY_TIMELINE: 'Chronologie vide',
		LOADING_TIMELINE: 'Chargement de la chronologie...',
		LIVE: 'En direct',
		DELETE_CONFERENCE_CONFIRM: 'Êtes-vous sûr de vouloir supprimer cette conférence ?',
		CLOSE: 'Fermer',
		PRPARING_CONFERENCE: 'Préparation de la conférence...',
		NETWORK_UPDATED: 'Mise à jour du réseau.',
		DELETE_ENTRY_CONFIRM: 'Voulez-vous vraiment supprimer cet élément ?',
		LOADING_NOTIFICATIONS: 'Chargement des notifications...',
		SIGNIN_VIDEO_CONFERENCING: 'Visioconférences sécurisées',
		SIGNIN_PRIVACY: 'Votre vie privée est notre Priorité',
		SIGNIN_PROTECTION: 'Nous assurons votre Protection',
		DELETING: 'Suppression du compte...',
		EXTERNAL_API_ERROR: "Échec du chargement de l'API de conférence.",
		REPORT: 'Dénoncer',
		BLOCK: 'Bloquer',
		PROFILE_UNAUTHORIZED: 'Non autorisé à voir ce profil.',
		MESSAGE: 'Message',
		REPORT_SUCCESS: 'Utilisateur signalé avec succès.',
		BLOCK_CONFIRM: 'Êtes vous sûr de vouloir bloquer cet utilisateur ?',
		BLOCK_SUCCESS: 'Utilisateur bloqué avec succès.',
		UNBLOCK_SUCCESS: 'Utilisateur débloqué avec succès.',
		UNBLOCK_CONFIRM: 'Voulez-vous vraiment débloquer cet utilisateur ?',
		UNBLOCK: 'Débloquer',
		PUBLIC: 'Publique',
		PRIVATE: 'Privée',
		MEMBERS: 'Membres',
		NO_MEMBER: 'Aucun membre',
		IS_BLACKLISTED: 'Votre compte est suspendu.',
		CONTACT: 'Contact',
		TECHNICAL_ISSUES_TITLE: 'Problèmes Techniques',
		TECHNICAL_ISSUES: 'Pour les problèmes techniques et les signalement de bogues, contactez admin@wexstream.com.',
		OTHER_REQUESTS_TITLE: 'Autres Demandes',
		OTHER_REQUESTS: 'Pour les demandes relatives à la plateforme, les demandes commerciales ou toute autre demande, contactez contact@wexstream.com.',
		LANGUAGE: 'Langue',
		NO_RESULT: 'Aucun résultat',
		RESET_PASSWORD: 'Changer le Mot de Passe',
		PLEASE_WAIT: 'Veuillez patienter...',
		SIGN_IN_WITH_FACEBOOK: 'Se connecter avec Facebook',
		DELETE_ALL_NOTIFICATIONS: 'Êtes vous sûr de vouloir supprimer toutes les notifications?',
		NO_MATCH: 'Rien à voir ici !',
		GO_TO_HOME: "Aller à la page d'accueil",
	}
})

let language = UserService.getQueryLanguage()

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage()
}

strings.setLanguage(language)
