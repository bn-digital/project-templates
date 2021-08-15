import { useContext, useEffect, useState } from 'react'
import { hasPermissions, request, UserContext } from 'strapi-helper-plugin'

const permissions = ({ uid }) =>
  ["create", "read", "update"].map((permission) => ({
    action: `plugins::content-manager.explorer.${permission}`,
    subject: uid,
  }));

function useContentTypes() {
  const [contentTypes, setContentTypes] = useState([]);
  const userContextData = useContext(UserContext);
  const userPermissions = userContextData.userPermissions || userContextData;

  useEffect(() => {
    const fetchContentTypes = async () => {
      // Get All content Types
      const { data } = await request("/content-manager/content-types");
      // Get Permissions of each content Type
      const contentTypesWithPermissions = await Promise.all(
        data.map(async (contentType) => {
          const hasPermission = await hasPermissions(
            userPermissions,
            permissions(contentType)
          );

          return { ...contentType, hasPermission };
        })
      );

      // Filter each content Type by permissions
      const filteredContentTypes = contentTypesWithPermissions.filter(
        ({ hasPermission }) => hasPermission
      );

      // SetState
      setContentTypes(filteredContentTypes);
    };

    fetchContentTypes();
  }, [userPermissions]);

  return contentTypes;
}

export default useContentTypes;
