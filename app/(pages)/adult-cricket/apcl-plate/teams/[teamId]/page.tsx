import { redirect } from 'next/navigation';

type Props = {
  params: { teamId: string };
};

export default function PlateTeamPage({ params }: Props) {
  redirect(`/teams/${params.teamId}`);
}
