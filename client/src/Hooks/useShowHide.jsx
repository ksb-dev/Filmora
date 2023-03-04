export const useShowHide = () => {
  const showForm = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '1'
    ref1.current.style.zIndex = '10'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '1'
  }

  const hideForm = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '0'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '0'
    ref2.current.style.zIndex = '-1'
  }

  const showMenu = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '1'
    ref1.current.style.zIndex = '4'
    ref2.current.style.transform = 'translateX(0%)'
  }

  const hideMenu = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0.3s ease'
    ref1.current.style.opacity = '0'
    ref1.current.style.zIndex = '-1'
    ref2.current.style.transform = 'translateX(-100%)'
  }

  const showLogout = logoutRef => {
    logoutRef.current.style.opacity = '1'
    logoutRef.current.style.zIndex = '5'
  }

  const hideLogout = logoutRef => {
    if (logoutRef !== null) {
      logoutRef.current.style.opacity = '0'
      logoutRef.current.style.zIndex = '-1'
    }
  }

  const showPlayer = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '1'
    ref1.current.style.zIndex = '10'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '1'
  }

  const hidePlayer = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '0'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '0'
    ref2.current.style.zIndex = '-1'
  }

  const showViewer = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '1'
    ref1.current.style.zIndex = '10'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '1'
  }

  const hideViewer = (ref1, ref2) => {
    ref1.current.style.transition = 'all 0s ease'
    ref1.current.style.opacity = '0'
    ref2.current.style.transition = 'all 0.5s ease'
    ref2.current.style.opacity = '0'
    ref2.current.style.zIndex = '-1'
  }

  return {
    showForm,
    hideForm,
    showMenu,
    hideMenu,
    showLogout,
    hideLogout,
    showPlayer,
    hidePlayer,
    showViewer,
    hideViewer
  }
}
