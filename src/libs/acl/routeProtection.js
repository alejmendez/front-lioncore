import ability from './ability'

export const canNavigate = to => to.matched.some(route => route.meta.public || ability.can(route.meta.action || 'read', route.meta.resource))

export const _ = undefined
