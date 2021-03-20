import { IUser } from './interfaces';

type UserInlineProps = {
  noFlag?: boolean;
  noId?: boolean;
  user: IUser;
};

export function UserInline(props: UserInlineProps) {
  return (
    <a href={`https://osu.ppy.sh/users/${props.user.id}`}>
      {!props.noFlag &&
        <>
          <img
            alt={`${props.user.country} flag`}
            src={`https://osu.ppy.sh/images/flags/${props.user.country}.png`}
            style={{
              height: '1em',
              paddingBottom: '0.05em',
              verticalAlign: 'bottom',
            }}
          />
          {' '}
        </>
      }
      {props.user.name}
      {!props.noId &&
        ` [#${props.user.id}]`
      }
    </a>
  );
}
