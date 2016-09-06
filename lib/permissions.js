// controle que l'utilisateur courant est bien propriétaire des post.
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}
